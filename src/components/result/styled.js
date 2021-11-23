import styled from "styled-components";
import { StyledButton } from "../../pages/home/style";

export const StyledResultContainer = styled.section`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  h1 {
    font-family: "VT323", monospace;
    font-size: 4rem;
    font-weight: 400;
    margin: 50px auto 0;
    @media screen and (max-width: 650px) {
      text-align: center;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
    margin: 20px auto;
    @media screen and (max-width: 650px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    margin: 0;
  }
  .questions {
    margin-bottom: 20px;
  }
`;
export const StyledPlayAgainButton = styled(StyledButton)`
  && {
    margin: 0 auto 20px;
  }
`;
