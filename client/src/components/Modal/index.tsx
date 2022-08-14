import { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useQueryClient } from "react-query";
import { Box, Button, Modal as TodoModal } from "@mui/material";
import { modalStyle, CustomTextField } from "components/Modal/styles";
import { idToBeUpdatedState, modalModeState, modalState } from "recoil/todo";
import useCreateTodo from "hooks/useCreateTodo";
import useUpdateTodo from "hooks/useUpdateTodo";
import { toast } from "react-toastify";

const Modal = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const modalMode = useRecoilValue(modalModeState);
  const idToBeUpdated = useRecoilValue(idToBeUpdatedState);
  const { mutate: createNewTodo } = useCreateTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const queryClient = useQueryClient();

  const onToggleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onClickSubmitTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newTitle = titleRef.current?.value;
    const newContent = contentRef.current?.value;

    if (!newTitle || !newContent) {
      toast.error("내용이 입력되지 않았습니다.");
    } else {
      if (modalMode === "create") {
        createNewTodo(
          { title: newTitle, content: newContent },
          {
            onSuccess: () => {
              queryClient.refetchQueries("todos");
              setIsModalOpen(false);
            },
          }
        );
      }

      if (modalMode === "update") {
        updateTodo(
          {
            id: idToBeUpdated,
            title: newTitle,
            content: newContent,
          },
          {
            onSuccess: () => {
              queryClient.refetchQueries("todos");
              setIsModalOpen(false);
            },
          }
        );
      }
    }
  };

  return (
    <>
      <TodoModal
        open={isModalOpen}
        onClose={onToggleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={onClickSubmitTodo}>
          <CustomTextField
            sx={{
              width: "100%",
            }}
            label="제목"
            variant="outlined"
            inputRef={titleRef}
          />
          <CustomTextField
            sx={{ width: "100%" }}
            multiline
            maxRows={4}
            label="내용"
            variant="outlined"
            inputRef={contentRef}
          />
          <Button sx={{ fontWeight: "bold" }} variant="contained" color="secondary" type="submit">
            {modalMode === "create" ? "추가하기" : "수정하기"}
          </Button>
          <Button sx={{ fontWeight: "bold" }} variant="contained" color="secondary" onClick={onToggleCloseModal}>
            취소
          </Button>
        </Box>
      </TodoModal>
    </>
  );
};

export default Modal;
