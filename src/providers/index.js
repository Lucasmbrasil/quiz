import axios from "axios";
import { createContext, useContext, useState } from "react";

export const ProviderContext = createContext();

export const Provider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [isCorrect, setIsCorrect] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  const [showCorrect, setShowCorrect] = useState(false);
  const [corrects, setCorrects] = useState(0);

  const handleConfirm = (qnt) => {
    axios.get(`https://opentdb.com/api.php?amount=${qnt}`).then((response) => {
      setQuestions(response.data.results);
    });
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswers = () => {
    questions.map((item) => {
      const answers = shuffleArray(
        item.incorrect_answers.concat(item.correct_answer)
      );
      item["answers"] = answers;
      item["chosenAnswers"] = "";
    });
  };

  const handleSubmit = (id, value) => {
    if (value.length > 0 && value === questions[id].correct_answer) {
      questions[id]["correctAnswers"] += 1;
      setIsCorrect("correct");
      setCorrects(corrects + 1);
      setDisabled(true);
    } else if (value.length > 0 && value !== questions[id].correct_answer) {
      setIsCorrect("wrong");
      setShowCorrect(true);
      setDisabled(true);
    } else {
      setIsCorrect(" ");
      setError(true);
      setHelperText("Selecione uma alternativa.");
    }
    if (value) {
      setNextPage(false);
    }
    questions[id]["chosenAnswers"] = value;
  };
  return (
    <ProviderContext.Provider
      value={{
        handleConfirm,
        questions,
        handleAnswers,
        handleSubmit,
        helperText,
        setHelperText,
        isCorrect,
        setIsCorrect,
        error,
        setError,
        corrects,
        setCorrects,
        disabled,
        setDisabled,
        nextPage,
        setNextPage,
        showCorrect,
        setShowCorrect,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export const useProvider = () => useContext(ProviderContext);
