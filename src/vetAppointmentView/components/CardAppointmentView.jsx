import AppointmentsTable from "./AppointmentsTable";
import getMyAppointments from "../../Services/appointmentView";
import { useEffect, useState } from "react";

export default function Card({ title, color }) {
  const [appointments, setAppointmentes] = useState([]);

  useEffect(() => {
    getMyAppointments().then(
      (response) => {
        setAppointmentes(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <article
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 30px" }}
      className={`flex flex-col p-6 text-black-800 bg-gray-200 rounded-lg justify-evenly justify-items-stretch ${color} sm:w-1/2 md:w-full lg:w-full`}>
      <article className='bg-emerald-300 rounded-3xl flex justify-center justify-items-stretch space-x-28 w-full p-0'>
        <h1 className='p-4 text-3xl my-4 font-medium text-center truncate '>
          {title}
        </h1>
      </article>
      <article className='flex flex-col md:flex-row justify-around pt-4'>
        <article className=' flex justify-center flex-wrap space-x-0 w-full'>
          <article className='bg-white shadow-md border border-gray-200 max-w-7xl  dark:bg-emerald-800 dark:border-emerald-700 sm:w-full md:w-full '>
            <table className='min-w-full border-collapse block md:table'>
              <thead className='block md:table-header-group '>
                <tr className='border border-emerald-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative '>
                  <th className='bg-emerald-800 p-2  text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                    Pet Owner Name
                  </th>
                  <th className='bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                    Pet id
                  </th>
                  <th className='bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                    Name
                  </th>
                  <th className='bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                    Symptoms
                  </th>
                  <th className='bg-emerald-800 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell'>
                    Appointment Date
                  </th>
                </tr>
              </thead>
              {appointments.map((item) => (
                <AppointmentsTable
                  PetOwner={item.id_user.name}
                  PetId={item.id_pet.id}
                  PetName={item.id_pet.name}
                  symptoms={item.symptoms}
                  Date={item.date_appointment}
                />
              ))}
            </table>
          </article>
        </article>
      </article>
    </article>
  );
}
