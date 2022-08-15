import { styled, TextField } from "@mui/material";

export const modalStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  gap: "15px",
};

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#bc8be0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#bc8be0",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#bc8be0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#bc8be0",
    },
  },
});
