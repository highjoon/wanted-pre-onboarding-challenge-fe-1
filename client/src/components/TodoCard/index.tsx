import { Link, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { Stack, styled, Paper, Button } from "@mui/material";
import { ButtonContainer } from "components/TodoCard/styles";
import useDeleteTodo from "hooks/useDeleteTodo";
import { idToBeUpdatedState, modalModeState, modalState } from "recoil/todo";

interface IProps {
  id: string;
  title: string;
  content: string;
}

const TodoCard = ({ id, title, content }: IProps) => {
  const params = useParams();
  const paramsId = params.id;
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
      <Link to={`/todo/${id}`} style={{ textDecoration: "none" }}>
        <Stack
          sx={{
            backgroundColor: "rgb(188, 139, 224, 0.5)",
          }}
          direction="column"
          justifyContent="flex-start"
        >
          <Item sx={{ display: "flex", flexDirection: "column", fontSize: "20px", fontWeight: "bold", gap: "15px" }}>
            {title}
            {paramsId === id && (
              <>
                <Item sx={{ backgroundColor: "#ffffff" }}>{content}</Item>
                <ButtonContainer>
                  <Button variant="contained" color="secondary" onClick={onToggleOpenModal}>
                    수정
                  </Button>
                  <Button variant="contained" color="secondary" onClick={onClickDeleteTodo}>
                    삭제
                  </Button>
                </ButtonContainer>
              </>
            )}
          </Item>
        </Stack>
      </Link>
    </>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(188, 139, 224, 0.2)",
  ...theme.typography.body2,
  padding: theme.spacing(2.5),
  color: theme.palette.text.secondary,
}));

export default TodoCard;
