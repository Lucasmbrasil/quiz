import { motion } from "framer-motion";
import Result from "../../components/result";

const ResultPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Result />
    </motion.div>
  );
};

export default ResultPage;
