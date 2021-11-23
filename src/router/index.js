import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import QuestionsPage from "../pages/questions";
import ResultPage from "../pages/result";

const PageRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perguntas/:id" element={<QuestionsPage />} />
        <Route path="/resultado" element={<ResultPage />} />
      </Routes>
    </AnimatePresence>
  );
};
export default PageRoutes;
