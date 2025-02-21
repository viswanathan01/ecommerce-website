import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email address to reset your password.");
      return;
    }
    setResetEmailSent(true);
    setShowForgotPasswordModal(true);
  };

  const closeModal = () => {
    setShowForgotPasswordModal(false);
    setResetEmailSent(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>
        <form className="space-y-4">
          {isSignUp && (
            <motion.input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
          />
          {isSignUp && (
            <motion.input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-300"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {!isSignUp && (
            <div className="text-right">
              <button
                type="button"
                className="cursor-pointer text-sm text-green-600 hover:underline"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full cursor-pointer bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </motion.button>
        </form>
        <div className="text-center mt-4">
          <button
            className="cursor-pointer text-sm text-gray-600 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </motion.div>

      {showForgotPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <h3 className="text-xl font-semibold mb-4">Forgot Password</h3>
            {resetEmailSent ? (
              <p className="text-gray-700">
                A password reset link has been sent to <strong>{email}</strong>.
              </p>
            ) : (
              <p className="text-gray-700">
                Please enter your email address to reset your password.
              </p>
            )}
            <div className="mt-6 flex justify-end">
              <button
                className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Login;