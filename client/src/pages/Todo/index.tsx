import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const mockAPI = {
  data: [
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
  ],
};

const Todo = () => {
  return (
    <>
      {mockAPI.data.map((data) => (
        <Accordion>
          <AccordionSummary
            sx={{ backgroundColor: "rgb(188, 139, 224, 0.5)" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>{data.title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ borderTop: "1px solid rgb(50, 50, 50, 0.5)", backgroundColor: "rgb(188, 139, 224, 0.2)" }}
          >
            <Typography>{data.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Todo;
