"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
const Button = () => {
  return (
    <div className="w-full max-w-md h-full max-h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome! Please Login
      </h1>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
          })
        }
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        <div className="flex items-center justify-center gap-2">
          <span>
            <FcGoogle fontSize={20} />
          </span>
          Sign in with Google
        </div>
      </button>
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "/",
          })
        }
        className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4"
      >
        <div className="flex items-center justify-center gap-2">
          <span>
            <FaGithub fontSize={20} />
          </span>
          Sign in with Github
        </div>
      </button>
    </div>
  );
};

export default Button;
