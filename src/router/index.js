import { Route, Routes } from "react-router-dom";
import Questions from "../components/questions";
import Result from "../components/result";
import Home from "../pages/home";
import QuestionsPage from "../pages/questions";
import ResultPage from "../pages/result";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perguntas/:id" element={<QuestionsPage />} />
      <Route path="/resultado" element={<ResultPage />} />
    </Routes>
  );
};
export default PageRoutes;
