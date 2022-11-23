import RegisterForm from "./RegisterForm";
import RegisterGoogle from "./registerGoogle"
import { NavLink } from "react-router-dom";

export default function Card({ title, method, buttonGoogle, src }) {
  return (
    <article className="bg-white shadow-md border border-gray-200 rounded-lg max-w-md p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ">
      <h1 className="text-3xl align-center my-4 font-semibold text-center pr-20 pl-20 text-black dark:text-white">
        {title}
      </h1>
      <div className="mb-6 text-center">
        <RegisterGoogle />
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
