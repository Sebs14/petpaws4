import MenuButton from "../../common/components/MenuButtons/Menubutton";
import Dates from "../../common/assets/images/dates.jpg";
import Vaccine from "../../common/assets/images/vaccine.jpeg";
import Register from "../../common/assets/images/register.jpg";
import CardContainer from "../../main/components/CardContainer/CardContainer";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "../../common/components/Navbar/Navbar";

export default function MenuUser() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar
        navigation={[
          { name: "User", href: "/My", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />
      <div className="h-full">
      <CardContainer>
        <MenuButton
          title="Dates"
          src={Dates}
          buttonMenu="Dates"
          url="/vetAppointments"
        />
        <MenuButton
          title="Mascotas Registradas"
          src={Register}
          buttonMenu="Mascotas Registradas"
          url="/MyPet"
        />
        <MenuButton
          title="Registro de Vacunas"
          src={Vaccine}
          buttonMenu="Registro de Vacunas"
          url="/vaccineRegister"
        />
      </CardContainer>
      </div>
    </main>
  );
}
