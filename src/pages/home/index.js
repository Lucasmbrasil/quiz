import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProvider } from "../../providers";
import image from "../../assets/home2.svg";
import {
  StyledButton,
  StyledDialogActions,
  StyledDialogTitle,
  StyledHomeContainer,
  StyledLastResultButton,
  StyledTextField,
} from "./style";
import { motion } from "framer-motion";
const Home = () => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [qnt, setQnt] = useState("");
  const navigate = useNavigate();
  const { handleConfirm, handleAnswers } = useProvider();
  const startingQuiz = () => {
    handleAnswers();
    setTimeout(() => navigate("/perguntas/1"), 500);
  };
  const lastResult = JSON.parse(localStorage.getItem("result")) || "";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledHomeContainer>
        <h1>It's... QUIZ TIME!!!</h1>
        <div>
          <img src={image} alt="welcome" />
        </div>

        <StyledTextField
          type="number"
          inputProps={{
            style: {
              color: "#49009c",
              fontFamily: '"Noto Sans Mono", monospace',
            },
          }}
          InputLabelProps={{
            style: {
              color: "#49009c",
              fontFamily: '"Noto Sans Mono", monospace',
            },
          }}
          label="Qts perguntas?"
          onChange={(e) => setQnt(e.target.value)}
        />
        <StyledButton
          variant="contained"
          disabled={qnt === ""}
          onClick={() => {
            handleConfirm(qnt);
            setModalConfirm(true);
          }}
        >
          CONFIRMAR
        </StyledButton>
        {lastResult !== "" && (
          <div className="lastResult">
            <StyledTextField
              inputProps={{
                readOnly: true,
                style: {
                  color: "#49009c",
                  fontFamily: '"Noto Sans Mono", monospace',
                },
              }}
              InputLabelProps={{
                style: {
                  color: "#49009c",
                  fontFamily: '"Noto Sans Mono", monospace',
                },
              }}
              className="lastResult"
              defaultValue="Gostaria de ver o último resultado?"
            />
            <StyledLastResultButton onClick={() => navigate("/resultado")}>
              Ver último resultado
            </StyledLastResultButton>
          </div>
        )}
        <Dialog onClose={() => setModalConfirm(false)} open={modalConfirm}>
          <StyledDialogTitle>Vamos jogar???</StyledDialogTitle>
          <DialogContent dividers>
            Gostaria de iniciar o quiz com {qnt} perguntas?
            <StyledDialogActions>
              <StyledButton
                variant="contained"
                onClick={() => setModalConfirm(false)}
              >
                CANCELAR
              </StyledButton>
              <StyledButton variant="contained" onClick={startingQuiz}>
                CONFIRMAR
              </StyledButton>
            </StyledDialogActions>
          </DialogContent>
        </Dialog>
      </StyledHomeContainer>
    </motion.div>
  );
};
export default Home;
