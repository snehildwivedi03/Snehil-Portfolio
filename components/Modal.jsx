import React from "react";
import { motion } from "framer-motion";

const Modal = ({ title, message, buttonText, isError, setIsModalVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
    >
      <div
        className={`rounded-2xl p-8 w-[90%] max-w-md border-2 shadow-xl backdrop-blur-xl bg-white/10 
        ${isError ? "border-red-400" : "border-blue-400"}`}
      >
        <div className="text-center">
          <h2
            className={`text-2xl font-bold mb-3 ${
              isError ? "text-red-400" : "text-blue-400"
            }`}
          >
            {title}
          </h2>
          <p className="text-white text-base">{message}</p>
        </div>

        <div className="text-center mt-6">
          <button
            className={`py-2 px-6 rounded-full font-medium text-white shadow-md transition-all duration-300 ${
              isError
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={() => setIsModalVisible(false)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
