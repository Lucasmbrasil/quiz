import { FormControlLabel } from "@mui/material";
import styled from "styled-components";
import { StyledButton } from "../../pages/home/style";

export const IsCorrectAnswer = styled.h3`
  color: #27af27;
`;
export const IsWrongAnswer = styled.h3`
  color: #ff0000;
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    font-family: "Noto Sans Mono", monospace;
  }
`;
export const StyledHomeContainer = styled.main`
  width: 80vw;
  height: 100vh;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  h1 {
    font-family: "VT323", monospace;
    font-size: 4rem;
    font-weight: 400;
    margin: 50px 0 0;
  }
  h2 {
    font-weight: 400;
    margin: 50px 0 0;
  }
  h3 {
    margin: 0;
  }
  .informations {
    font-size: 1rem;
  }

  @media screen and (max-width: 650px) {
    span {
      text-align: center;
    }
  }
`;
export const StyledQuestionButton = styled(StyledButton)`
  && {
    background-color: rgb(255, 242, 0);
    color: #49009c;
    width: 250px;
    margin-right: auto;
  }
  &&:hover {
    background-color: #49009c;
    color: rgb(255, 242, 0);
  }
  @media screen and (max-width: 650px) {
    && {
      margin: 0 auto;
    }
  }
`;
export const StyledNextButton = styled(StyledButton)`
  && {
    margin-left: auto;
    background-color: rgb(255, 242, 0);
    color: #49009c;
  }
  &&:hover {
    background-color: #49009c;
    color: rgb(255, 242, 0);
  }
  @media screen and (max-width: 650px) {
    && {
      margin: 10px auto;
    }
  }
`;
