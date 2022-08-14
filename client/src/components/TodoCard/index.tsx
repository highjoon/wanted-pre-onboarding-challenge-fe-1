import { ButtonContainer } from "components/TodoCard/styles";
import { Accordion, Button } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  id: string;
  title: string;
  content: string;
}

const TodoCard = ({ id, title, content }: Props) => {
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
            <Button variant="contained" color="secondary">
              수정
            </Button>
            <Button variant="contained" color="secondary">
              삭제
            </Button>
          </ButtonContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default TodoCard;
