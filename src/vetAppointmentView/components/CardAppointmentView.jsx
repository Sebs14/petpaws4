import AppointmentsTable from "./AppointmentsTable";
import getMyAppointments from "../../Services/appointmentView";
import { useEffect, useState } from "react";

import { format } from 'date-fns';

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
      <article className='bg-emerald-500 rounded-lg flex justify-center justify-items-stretch space-x-28 w-full p-0'>
        <h1 className='p-4 text-3xl my-4 font-bold text-center truncate '>
          {title}
        </h1>
      </article>
      <article className='flex flex-col md:flex-row justify-around pt-4 '>
        <article className=' flex justify-center flex-wrap space-x-0 w-full'>
          <article className='bg-white shadow-md border-[0.1px] rounded-t-xl border-gray-200 dark:bg-emerald-800 dark:border-emerald-700 sm:w-full '>
            <table className='table-fixed min-w-full rounded-xl'>
              <thead className='md:table-header-group'>
                <tr className='border  border-emerald-500 md:border-none block md:table-row absolute text-center -top-full md:top-auto -left-full md:left-auto  md:relative '>
                  <th className=' p-2  text-white font-bold block md:table-cell'>
                    Pet Owner Name
                  </th>
                  <th className=' p-2  text-white font-bold block md:table-cell'>
                    Pet id
                  </th>
                  <th className=' p-2 text-white font-bold block md:table-cell'>
                    Name
                  </th>
                  <th className=' p-2 text-white font-bold block md:table-cell'>
                    Symptoms
                  </th>
                  <th className=' p-2 text-white font-bold block md:table-cell'>
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
      <div className="p-5 flex items-center justify-center text-black">
            <div className="col-span-6 sm:col-span-3">
            <a
            href='https://meet.google.com/new'
            className='w-full p-5 bg-emerald-500 rounded-3xl flex justify-center space-x-24 text-white font-bold text-lg hover:bg-emerald-800/80'>
            New Meeting 
          </a>
            </div>
          </div>
    </article>
  );
}
