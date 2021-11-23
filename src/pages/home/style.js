import { Button, DialogActions, DialogTitle, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  && {
    width: 200px;
    margin: 15px 0 0;
  }
  & label.Mui-focused {
    color: #000000;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #49009c;
    }
  }
`;
export const StyledHomeContainer = styled.main`
  .lastResult {
    width: 370px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  h1 {
    font-family: "VT323", monospace;
    font-size: 4rem;
    font-weight: 400;
  }
  @media screen and (max-width: 650px) {
    img {
      width: 300px;
    }
    h1 {
      text-align: center;
      font-size: 3rem;
    }
    .lastResult {
      width: 250px;
    }
    .lastResult input {
      display: none;
    }
  }
`;
export const StyledButton = styled(Button)`
  && {
    color: #49009c;
    background-color: #fff200;
    width: 200px;
  }
  &&:hover {
    background-color: #49009c;
    color: #fff200;
  }
`;
export const StyledLastResultButton = styled(StyledButton)`
  && {
    width: 370px;
  }
`;
export const StyledDialogActions = styled(DialogActions)`
  margin: 0 auto;
`;
export const StyledDialogTitle = styled(DialogTitle)`
  && {
    font-family: "Noto Sans Mono", monospace;
  }
`;
