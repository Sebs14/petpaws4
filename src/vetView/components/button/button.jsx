export default function vetButton({ title }) {
    return (
      <button
        type="submit"
        className="flex sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center items-center w-50 text-white 
        hover:bg-emerald-400 focus:ring-4 focus:ring-emerald-600 font-semibold rounded-lg text-lg px-2 
        py-2 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-600"
      >
        {title}
      </button>
    );
  }
  