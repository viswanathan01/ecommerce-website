import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SpecialButton = ({ isPlaceOrderPage }) => {
  const navigate = useNavigate();


  const buttonText = isPlaceOrderPage ? "PLACE ORDER" : "CHECKOUT";
  const targetRoute = isPlaceOrderPage ? "" : "/place-order";

  return (
    <motion.button
      onClick={() => navigate(targetRoute)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full cursor-pointer mt-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {buttonText}
    </motion.button>
  );
};

export default SpecialButton;
