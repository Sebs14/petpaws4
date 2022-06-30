/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RoutesContainer from "./common/utils/RoutesContainer/RoutesContainer";
import UserPetRegisterView from "./userPetRegisterView/pages/UserPetRegisterView"
// eslint-disable-next-line import/no-named-as-default-member
import Main from "./main/pages/main";
import UserAppointmentCreation from "./UserAppointmentCreation/pages/UserAppointmentCreation";
import Login from "./login/pages/Login";
import MenuUser from "./menuUser/pages/menuUser";
import Waves from "./common/assets/images/waves.png"
import AboutUs from "./aboutUs/pages/AboutUs";
import VetView from "./vetView/pages/vetView";
import VetPetRegisterView from "./vetPetRegisterView/pages/vetPetRegisterView";
import Register from "./register/pages/Register";
import UserPetView from "./userPetView/pages/UserPetView";
import VetAppointment from "./vetAppointmentView/pages/VetAppointmentView";
import VetAddVaccineView  from "./vetAddVaccineView/pages/vetAddVaccineView";
import VaccineRegister from "./vaccineRegister/pages/VaccineRegister";

import "./App.css";
import "./index.css";




function App() {
  return (
    <div
      className="bg-no-repeat bg-contain bg-fixed bg-bottom"
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="AboutUs"
            element={<RoutesContainer title="AboutUs" element={<AboutUs />} />}
          />
          <Route
            path=""
            element={<RoutesContainer title="Main" element={<Main />} />}
          />
          <Route
            path="login"
            element={<RoutesContainer title="Login" element={<Login />} />}
          />
          <Route
            path="MenuUser"
            element={
              <RoutesContainer title="MenuUser" element={<MenuUser />} />
            }
          />
          <Route
            path="userPetRegisterView"
            element={
              <RoutesContainer
                title="userPetRegisterView"
                element={<UserPetRegisterView />}
              />
            }
          />
          <Route
            path="Register"
            element={
              <RoutesContainer title="Register" element={<Register />} />
            }
          />
          <Route
            path="MyPet"
            element={
              <RoutesContainer title="MyPet" element={<UserPetView />} />
            }
          />
          <Route
            path="user_appointment_creation"
            element={
              <RoutesContainer
                title="UserAppointmentCreation"
                element={<UserAppointmentCreation />}
              />
            }
          />
          <Route
            path="vetView"
            element={<RoutesContainer title="vetView" element={<VetView />} />}
          />
          <Route
            path="vaccineRegister"
            element={<RoutesContainer title="vaccineRegister" element={<VaccineRegister />} />}
          />
          <Route
            path="vetPetRegisterView"
            element={
              <RoutesContainer
                title="vetPetRegisterView"
                element={<VetPetRegisterView />}
              />
            }
          />
          <Route
            path="vetAppointments"
            element={
              <RoutesContainer
                title="vetAppointments"
                element={<VetAppointment />}
              />
            }
          />
          <Route
            path="vetAddVaccineView"
            element={
              <RoutesContainer
                title="vetAddVaccineView"
                element={<VetAddVaccineView />}
              />
            }
          />
          <Route
            path="Vregister"
            element={
              <RoutesContainer
                title="Vregister"
                element={<VaccineRegister />}
              />
            }
          />
          <Route
            path="*"
            element={
              <h1 className="h-screen text-center text-black">
                Page not found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
