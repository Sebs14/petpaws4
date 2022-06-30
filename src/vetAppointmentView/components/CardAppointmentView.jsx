import AppointmentsTable from "./AppointmentsTable";

export default function Card({ title, color }) {
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
        <article className=" flex justify-center space-x-0 w-full">
          <AppointmentsTable
            PetOwner="Andres Lopez"
            PetId="00123"
            PetName="Manuel"
            UserEmail="0019231@uca.edu.sv"
            Date="19/07/22"
          />
        </article>
      </article>
    </article>
  );
}
