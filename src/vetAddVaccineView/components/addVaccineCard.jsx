import DropdownVaccine from "./dropdownVaccines";

export default function Card({ title, color, src }) {
  return (
    <article
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 30px" }}
      className={`flex flex-col p-6 text-black-800 bg-gray-200 rounded-lg justify-evenly justify-items-stretch ${color} sm:w-1/2 md:w-full lg:w-full`}
    >
      <article className="bg-emerald-300 rounded-3xl flex justify-center justify-items-stretch space-x-28 w-full p-0">
        <h1 className="p-4 text-3xl my-4 font-medium text-center truncate ">
          {title}
        </h1>
      </article>
      <article className="flex flex-col md:flex-row justify-around pt-4">
        <article className=" flex justify-start ">
          <button type="button" className=" w-64 p-4 ">
            <div className="flex w-full justify-center items-center p-4 bg-gray-300 rounded-2xl">
              <img src={src} alt="Pet" className="w-full" />
            </div>
          </button>
        </article>
        <article className=" flex flex-col justify-center space-x-0">
          <button type="button" className=" w-64 p-4 ">
            <div className="flex w-full justify-center  p-4 bg-gray-300 rounded-2xl">
              <h1>Add Vaccine </h1>
              <DropdownVaccine InfoSpan="Rabia" />
            </div>
          </button>
          <button type="button" className=" w-64 p-4 ">
            <div className="flex w-full justify-center  p-4 bg-gray-300 rounded-2xl">
              <h1>Add New Vaccine </h1>
            </div>
          </button>
        </article>
      </article>
    </article>
  );
}
