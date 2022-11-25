import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import LoginForm from "./LoginForm";
import LoginGoogle from "./loginGoogle";


/* eslint-disable prettier/prettier */

export default function Card({ title}) {
  
  return (
    <article className="bg-white shadow-md border border-gray-200 rounded-lg max-w-md p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-3xl align-center my-4 font-semibold text-center pr-20 pl-20 text-black dark:text-white">
        {title}
      </h1>
      <a>
        <LoginGoogle/>
        
      </a>
      <div>
        <h3 className="text-2xl align-center my-4 font-semibold text-center pr-20 pl-20 text-black dark:text-white">
          Or
        </h3>
        <hr class="mb-6 border-t " />
      </div>
      <LoginForm />

      <NavLink to="/Register">
        <p className="text-center text-white hover:text-emerald-600">
          Don't have an account? Register!
        </p>
      </NavLink>
    </article>
  );
}
