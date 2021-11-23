import { decode } from "html-entities";
import { useNavigate } from "react-router";
import { IsCorrectAnswer, IsWrongAnswer } from "../questions/style";
import { StyledPlayAgainButton, StyledResultContainer } from "./styled";

const Result = () => {
  const navigate = useNavigate();
  const result = JSON.parse(localStorage.getItem("result"));

  return (
    <StyledResultContainer>
      <h1>VOCÊ ACERTOU:</h1>
      {result.questions.length > 0 && (
        <>
          <h2>
            {result.correctAnswers} perguntas de {result.questions.length}!
          </h2>
          <StyledPlayAgainButton onClick={() => navigate("/")}>
            Jogar novamente?
          </StyledPlayAgainButton>
          {result.questions.map((item, index) => (
            <div className="questions" key={index}>
              <h3>
                Questão {index + 1}: {decode(item)}
              </h3>
              <div>
                Você escolheu:
                {result.questionsAnswers[index] ===
                result.chosenAnswers[index] ? (
                  <IsCorrectAnswer>
                    "{decode(result.chosenAnswers[index])}"
                  </IsCorrectAnswer>
                ) : (
                  <IsWrongAnswer>
                    "{decode(result.chosenAnswers[index])}"
                  </IsWrongAnswer>
                )}
                e a resposta é:{" "}
                <h3>"{decode(result.questionsAnswers[index])}"</h3>
              </div>
            </div>
          ))}
        </>
      )}
    </StyledResultContainer>
  );
};

export default Result;
