import { useNavigate, NavLink } from "react-router-dom";

/* eslint-disable prettier/prettier */
export default function menuButton({ title, buttonMenu, src, url }) {
  const navigate = useNavigate();
  return (
    <article className="bg-white shadow-md border border-gray-200 rounded-lg max-w-md p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-xl align-center my-4 font-semibold text-center pr-5 pl-5">
        {buttonMenu}
      </h1>
      <NavLink
        key={title}
        to={url}
      >
        <button
          onClick={navigate({ url })}
          type="button"
          className="flex justify-center items-center w-full text-white bg-emerald-300 hover:bg-emerald-400 focus:ring-4 focus:ring-emerald-600 font-semibold rounded-lg text-lg px-2 py-2 text-center dark:bg-emerald-800 dark:hover:bg-emerald-900 dark:focus:ring-emerald-600"
        >
          <img src={src} alt={title} className=" w-60 rounded-lg" />
        </button>
      </NavLink>
    </article>
  );
}
