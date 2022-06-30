import BGAnimals from "../../assets/images/puglogo.png";

export default function Title() {
  return (
    <section className="flex flex-col justify-center items-center h-auto text-gray-800 sm:flex-row md:w-1/2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="hidden sm:block font-semibold text-3xl text-center">
          Veterinary
        </h1>
        <h2 className="hidden sm:block font-semibold text-4xl text-center ">
          4 Paws
        </h2>
      </div>

      <div className="h-1/2 px-3">
        <img
          src={BGAnimals}
          alt="bg animals"
          className="w-1/2 rounded-full mx-auto"
        />
      </div>
    </section>
  );
}
