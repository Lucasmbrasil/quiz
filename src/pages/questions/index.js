import { motion } from "framer-motion";
import Questions from "../../components/questions";

export const QuestionsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Questions />
    </motion.div>
  );
};
export default QuestionsPage;
