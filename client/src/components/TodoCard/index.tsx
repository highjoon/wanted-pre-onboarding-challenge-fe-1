import { useQueryClient } from "react-query";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ButtonContainer } from "components/TodoCard/styles";
import useDeleteTodo from "hooks/useDeleteTodo";
import { useSetRecoilState } from "recoil";
import { idToBeUpdatedState, modalModeState, modalState } from "recoil/todo";

interface Props {
  id: string;
  title: string;
  content: string;
}

const TodoCard = ({ id, title, content }: Props) => {
  const { mutate: deleteTodo } = useDeleteTodo();
  const setIsModalOpen = useSetRecoilState(modalState);
  const setModalMode = useSetRecoilState(modalModeState);
  const setIdTobeUpdated = useSetRecoilState(idToBeUpdatedState);
  const queryClient = useQueryClient();

  const onClickDeleteTodo = () => {
    deleteTodo(
      { id },
      {
        onSuccess: () => {
          queryClient.refetchQueries("todos");
        },
      }
    );
  };

  const onToggleOpenModal = () => {
    setIsModalOpen(true);
    setModalMode("update");
    setIdTobeUpdated(id);
  };

  return (
    <>
      <Accordion disableGutters={true}>
        <AccordionSummary
          sx={{
            margin: "0px",
            backgroundColor: "rgb(188, 139, 224, 0.5)",
            borderTop: "1px solid rgb(50, 50, 50, 0.5)",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            borderTop: "1px solid rgb(50, 50, 50, 0.5)",
            backgroundColor: "rgb(188, 139, 224, 0.2)",
            overflowWrap: "break-word",
          }}
        >
          <Typography>{content}</Typography>
          <ButtonContainer>
            <Button variant="contained" color="secondary" onClick={onToggleOpenModal}>
              수정
            </Button>
            <Button variant="contained" color="secondary" onClick={onClickDeleteTodo}>
              삭제
            </Button>
          </ButtonContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default TodoCard;
