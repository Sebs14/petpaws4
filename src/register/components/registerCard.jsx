import RegisterForm from "./RegisterForm";
import { NavLink } from "react-router-dom";

export default function Card({ title, method, buttonGoogle, src }) {
  return (
    <article className="bg-white shadow-md border border-gray-200 rounded-lg max-w-md p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <h1 className="text-3xl align-center my-4 font-semibold text-center pr-20 pl-20 text-black dark:text-white">
        {title}
      </h1>
      <div className="mb-6 text-center">
        <a>
          <button
            type="button"
            className="flex justify-center items-center w-full text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-600 font-semibold rounded-full text-lg px-5 py-2.5 text-center dark:bg-emerald-800 dark:hover:bg-emerald-900 dark:focus:ring-emerald-600"
          >
            <img src={src} alt={title} className=" w-full h-10 w-10 mr-2 " />
            {buttonGoogle}
          </button>
        </a>
      </div>
      <div>
        <h3 className="text-2xl align-center my-4 font-semibold text-center pr-20 pl-20 text-black dark:text-white">
          {method}
        </h3>
        <hr className="mb-6 border-t " />
      </div>
      <RegisterForm />

      <NavLink to='/Login'>
        <p className="text-center text-white hover:text-emerald-600">
          Already have an account? Login!
        </p>
      </NavLink>
    </article>
  );
}
