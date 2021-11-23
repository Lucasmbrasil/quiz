import { FormControl, FormHelperText, Radio, RadioGroup } from "@mui/material";
import { decode } from "html-entities";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useProvider } from "../../providers";
import {
  IsCorrectAnswer,
  IsWrongAnswer,
  StyledFormControlLabel,
  StyledHomeContainer,
  StyledNextButton,
  StyledQuestionButton,
} from "./style";
const Questions = () => {
  const {
    questions,
    handleSubmit,
    isCorrect,
    setError,
    helperText,
    setHelperText,
    corrects,
    disabled,
    setDisabled,
    nextPage,
    setNextPage,
    setIsCorrect,
  } = useProvider();
  const navigate = useNavigate();
  const params = useParams();
  const [value, setValue] = useState("");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const index = Number(params.id) - 1;

  const handleNextPage = () => {
    setDisabled(false);
    setValue("");
    setIsCorrect(" ");
    navigate(`/perguntas/${Number(params.id) + 1}`);
    setNextPage(true);
  };
  const handleFinish = () => {
    const result = {
      correctAnswers: corrects,
      questions: questions.map((item) => item.question),
      questionsAnswers: questions.map((item) => item.correct_answer),
      chosenAnswers: questions.map((item) => item.chosenAnswers),
    };

    localStorage.clear();
    localStorage.setItem("result", JSON.stringify(result));
    navigate("/resultado");
  };
  return (
    questions[index].answers !== undefined && (
      <StyledHomeContainer>
        <h1>PERGUNTA {params.id}</h1>
        <section className="informations">
          <div>
            Categoria: {decode(questions[index].category)} | Dificuldade:{" "}
            {decode(questions[index].difficulty)}
          </div>
        </section>
        <h2>{decode(questions[index].question)}</h2>
        <form>
          <FormControl
            sx={{ m: 3, fontFamily: '"Noto Sans Mono", monospace' }}
            component="fieldset"
            variant="standard"
          >
            {questions[index].answers.map((alternative, index) => (
              <RadioGroup
                key={index}
                aria-label="quiz"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                <StyledFormControlLabel
                  value={alternative}
                  control={
                    <Radio
                      sx={{
                        color: "#49009c",
                        "&.Mui-checked": {
                          color: "#49009c",
                        },
                      }}
                    />
                  }
                  label={decode(alternative)}
                  disabled={
                    (value === "" && disabled) ||
                    (helperText !== "" && disabled)
                  }
                />
              </RadioGroup>
            ))}
            <FormHelperText>{helperText}</FormHelperText>
            <IsCorrectAnswer>
              {isCorrect === "correct" ? "Reposta certa!" : " "}{" "}
            </IsCorrectAnswer>
            <>
              <IsWrongAnswer>
                {isCorrect === "wrong" ? "Reposta errada!" : " "}
              </IsWrongAnswer>
              <IsCorrectAnswer>
                {isCorrect === "wrong"
                  ? `Resposta certa: ${decode(questions[index].correct_answer)}`
                  : " "}
              </IsCorrectAnswer>
            </>
          </FormControl>
        </form>
        <StyledQuestionButton
          className="confirmButton"
          variant="contained"
          onClick={() => handleSubmit(index, value)}
          disabled={disabled}
        >
          Confirmar resposta
        </StyledQuestionButton>
        <StyledNextButton
          className="nextButton"
          variant="contained"
          onClick={() =>
            questions.length === Number(params.id)
              ? handleFinish()
              : handleNextPage()
          }
          disabled={nextPage}
        >
          {questions.length === Number(params.id) ? "Finalizar" : "PRÓXIMA"}
        </StyledNextButton>

        <span>
          Você acertou {corrects}/{params.id}{" "}
        </span>
      </StyledHomeContainer>
    )
  );
};

export default Questions;
