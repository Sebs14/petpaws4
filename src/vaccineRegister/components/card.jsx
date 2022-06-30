import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import VaccineRegister from "../../Services/vaccineRegister";

export default function Card({ title, color, src2 }) {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [reinforcement, setReinforcement] = useState("");
  const [idPet, setIdPet] = useState("");
  const navigate = useNavigate();

  const handleRegisterVaccine = async (e) => {
    e.preventDefault();
    try {
      await VaccineRegister(type, date, reinforcement, idPet).then(
        (response) => {
          navigate("/menuUser");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 30px" }}
      className={`flex flex-col p-6 text-black-800 bg-gray-200 rounded-lg justify-evenly justify-items-center ${color} sm:w-full md:w-full lg:w-full`}>
      <article className='bg-emerald-300 dark:bg-emerald-500 rounded-3xl flex justify-center justify-items-stretch space-x-28 w-full p-0'>
        <h1 className='p-4 text-3xl my-4 font-medium text-center truncate '>
          {title}
        </h1>
      </article>
      <article className='flex flex-col md:flex-row justify-around pt-4'>
        <article className=' flex justify-center space-x-0 w-full'>
          <form
            className=' flex flex-col justify-center justify-items-center items-center'
            onSubmit={handleRegisterVaccine}>
            <div className='mb-4 md:mr-2 md:mb-0 md:pb-4'>
              <h1 className='font-bold text-center dark:text-black'>
                Vaccine name:
              </h1>
              <input
                className='w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Vaccine name'
                value={type}
                onChange={(e) => setType(e.target.value)}
                name='idPet'
                required
              />
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className='mb-4 md:mr-2 md:mb-0 md:pb-4'>
              <h1 className='font-bold text-center dark:text-black'>
                First Dose:
              </h1>
              <DateTimePicker
                name="firstDose"
                value={date}
                inputFormat='E MMM dd yyyy HH:MM:SS O'
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className='mb-4 md:mr-2 md:mb-0 md:pb-4'>
              <h1 className='font-bold text-center dark:text-black'>
                Second Dose:
              </h1>
              <DateTimePicker
                name="secondDose"
                value={reinforcement}
                inputFormat='E MMM dd yyyy HH:MM:SS O'
                onChange={(e) => setReinforcement(e.target.value)}
              />
            </div>
            </MuiPickersUtilsProvider>
            <div className='mb-4 md:mr-2 md:mb-0 md:pb-4'>
              <h1 className='font-bold text-center dark:text-black'>
                Second Dose:
              </h1>
              <input
                className='w-full px-3 py-2 text-sm bg-white leading-tight text-gray-700 border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Pet Id'
                value={idPet}
                onChange={(e) => setIdPet(e.target.value)}
                name='idPet'
                required
              />
            </div>
            <button
              type='submit'
              className=' w-16 p-2 bg-green-300 rounded-3xl flex justify-items-center space-x-24'>
              <div className='flex w-full justify-center items-center'>
                <img src={src2} alt='back' className='justify-items-end' />
              </div>
            </button>
          </form>
        </article>
      </article>
    </article>
  );
}
