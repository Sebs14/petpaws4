function Dropdown() {
  return (
    <div className="dropdowns ">
      <div className="group inline-block">
        <button
          type="button"
          className="outline-none focus:outline-none border px-3 py-2 bg-white rounded-3xl rounded-l-none flex items-center min-w-"
        >
          <span className="pr-1 font-semibold flex-1" />
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-black">
            White
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-orange-400">Orange</li>
          <li className="rounded-sm px-3 py-1 hover:bg-blue-400 ">Blue</li>
          <li className="rounded-sm px-3 py-1 hover:bg-zinc-900 hover:text-white">
            Black
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-gray-300 hover:text-black">
            Gray
          </li>
          <li className="rounded-sm px-3 py-1 hover:bg-amber-900">Brown</li>
        </ul>
      </div>
    </div>
  );
}
export default Dropdown;
