import Combobox from "./Combobox";
import Popup from "./popup";

export default function Card({ title, color }) {
  return (
    <article
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 30px" }}
      className={`flex flex-col p-6 text-black-800 bg-gray-200 rounded-lg justify-evenly justify-items-stretch ${color} sm:w-1/2 md:w-full lg:w-full`}
    >
      <article className="bg-emerald-300 dark:bg-emerald-500 rounded-3xl flex justify-center justify-items-stretch space-x-28 w-full p-0">
        <h1 className="p-4 text-3xl my-4 font-medium text-center truncate ">
          {title}
        </h1>
      </article>
      <article className="flex flex-col md:flex-row justify-around pt-4">
        <article className=" flex justify-center space-x-0 w-full">
          <form className=" flex flex-col justify-center">
            <h1 className="font-bold text-center dark:text-black">
              Vaccine Name:
            </h1>
            <div className="mb-4 md:mr-2 md:mb-0 md:py-4 flex flex-row rounded-3xl">
              <Combobox />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 md:pb-4">
              <h1 className="font-bold text-center dark:text-black">
                First Dose:
              </h1>
              <input
                className="w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstDose"
                type="date"
                placeholder="First dose date:"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 md:pb-4">
              <h1 className="font-bold text-center dark:text-black">
                Second Dose:
              </h1>
              <input
                className="w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
                id="secondDose"
                type="date"
                placeholder="Second dose date:"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0 md:pb-4">
              <h1 className="font-bold text-center dark:text-black">
                Third Dose:
              </h1>
              <input
                className="w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
                id="thirdDose"
                type="date"
                placeholder="Third dose date:"
              />
            </div>
            <Popup
            />
          </form>
        </article>
      </article>
    </article>
  );
}
