import { useRef } from "react";
import { useRecoilState } from "recoil";
import { Box, Button, Modal as TodoModal } from "@mui/material";
import { modalStyle, CustomTextField } from "components/Modal/styles";
import { modalState } from "recoil/todo";
import useCreateTodo from "hooks/useCreateTodo";
import { useQueryClient } from "react-query";

const Modal = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const { mutate: createNewTodo } = useCreateTodo();
  const queryClient = useQueryClient();

  const onToggleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onClickSubmitTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newTitle = titleRef.current?.value;
    const newContent = contentRef.current?.value;
    if (newTitle && newContent) {
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
            추가하기
          </Button>
        </Box>
      </TodoModal>
    </>
  );
};

export default Modal;
