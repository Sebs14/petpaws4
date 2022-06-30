/* This requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import PopupDate from "../popupDate";
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
          navigate("/menuUser");
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
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="bg-emerald-600 px-4 py-5 flex justify-center items-center">
        <h3 className="text-lg leading-6 font-medium text-white">
          Agendar cita
        </h3>
      </div>
      <div className="border-t border-gray-200 flex flex-col font-bold">
        <form onSubmit={handleappointmentCreation}>
          <div className="p-5 justify-center text-black">
            <label>Fecha y Hora</label>
            <DateTimePicker
              value={fechaSeleccionada}
              onChange={cambiarFechaSelecionada}
            />
          </div>
          <div className="p-5 justify-center text-black">
            <p>Describa los síntomas del paciente</p>
            <div>
              <div className="mt-1">
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  name="symtoms"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 
                                    mt-1 block w-full sm:text-sm text-black border border-gray-300 rounded-md"
                  placeholder=" Ingrese los síntomas"
                  required
                />
              </div>
            </div>
          </div>
          <div className="p-5 justify-center text-black">
            <p>Seleccionar mascota</p>
            <div className="col-span-6 sm:col-span-3">
              <input
                type='text'
                placeholder='Pet ID'
                value={idPet}
                onChange={(e) => setIdPet(e.target.value)}
                name='IdPet'
                required
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                                rounded-md shadow-sm focus:outline-none text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="p-4 flex justify-center">
          <button
                type='submit'
                className=' w-16 p-2 bg-green-300 rounded-3xl flex justify-items-end space-x-24'>
                <div className='flex w-full justify-center items-center'>
                  <img src={src2} alt='back' className='justify-items-end' />
                </div>
              </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}
