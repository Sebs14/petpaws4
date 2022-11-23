/* This requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import addAppointment from "../../../Services/appointmentCreation";
import { useNavigate } from "react-router";
import src2 from "../../../common/assets/images/checked.png"

export default function appointmentCreation({ pet }) {
  
  const [fechaSeleccionada, cambiarFechaSelecionada] = useState(new Date());
  const [symptoms, setSymptoms] = useState("");
  const [idPet, setIdPet] = useState("");

  const navigate = useNavigate();

  const handleappointmentCreation = async (e) => {
    e.preventDefault();
    try {
      await addAppointment(fechaSeleccionada, symptoms, idPet).then(
        (response) => {
          console.log(fechaSeleccionada);
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
    
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-1/2 opacity-90">
      <div className="bg-emerald-600 px-4 py-5 flex justify-center items-center">
        <h3 className="text-lg leading-6 font-bold text-white">
          Schedule an Appointment
        </h3>
      </div>
      <div className="border-t border-gray-200 flex flex-col font-bold">
        <form onSubmit={handleappointmentCreation}>
          <div className="p-5 justify-center text-black">
            <label>Date and Hour</label>
      
            <DateTimePicker className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              value={fechaSeleccionada}
              label="Select Date and Hour"
              inputFormat="E MMM dd yyyy HH:MM:SS O"
              onChange={cambiarFechaSelecionada}
            />
          </div>
          <div className="p-5 justify-center text-black">
            <p>Pet symptoms</p>
            <div>
              <div className="mt-1">
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  name="symtoms"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 
                  dark:bg-gray-200 mt-1 block w-full sm:text-sm text-black border border-gray-300 rounded-md"
                  placeholder="Let us know what's going on with your pet"
                  required
                />
              </div>
            </div>
          </div>
          <div className="p-5 justify-center text-black">
            <p>Select Pet</p>
            <div className="col-span-6 sm:col-span-3">
              <input
                type='text'
                placeholder='Pet ID'
                value={idPet}
                onChange={(e) => setIdPet(e.target.value)}
                name='IdPet'
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                dark:bg-gray-200 rounded-md shadow-sm focus:outline-none text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="p-4 flex justify-center">
          <button
                type='submit'
                className=' w-1/2 p-5 bg-green-300 rounded-3xl flex justify-center space-x-24 text-black font-bold text-lg'>
                C R E A T E
              </button>
           
          </div>
        </form>
      </div>
    </div>
    
  );
}
