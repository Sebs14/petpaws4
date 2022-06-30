/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import PopupDate from "../popupDate";

export default function appointmentCreation({ pet }) {
  const [fechaSeleccionada, cambiarFechaSelecionada] = useState(new Date());
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="bg-emerald-600 px-4 py-5 flex justify-center items-center">
        <h3 className="text-lg leading-6 font-medium text-white">
          Agendar cita
        </h3>
      </div>
      <div className="border-t border-gray-200 flex flex-col font-bold">
        <form action="#" method="POST">
          <div className="p-5 justify-center text-black">
            <label>Fecha y Hora</label>
            <DateTimePicker
              value={fechaSeleccionada}
              onChange={cambiarFechaSelecionada}
            />
          </div>
          <div className="p-5 justify-center">
            <p>Describa los síntomas del paciente</p>
            <div>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 
                                    mt-1 block w-full sm:text-sm text-black border border-gray-300 rounded-md"
                  placeholder="Ingrese los síntomas"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="p-5 justify-center">
            <p>Seleccionar mascota</p>
            <div className="col-span-6 sm:col-span-3">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white 
                                rounded-md shadow-sm focus:outline-none text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>{pet}</option>
                <option>{pet}</option>
                <option>{pet}</option>
              </select>
            </div>
          </div>
          <div className="p-4 flex justify-center">
            <PopupDate
              buttons="Create date"
              message="Created the date succefully"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
