import MenuButton from "../../common/components/MenuButtons/Menubutton";
import Dates from "../../common/assets/images/dates.jpg";
import Vaccine from "../../common/assets/images/vaccine.jpeg";
import Register from "../../common/assets/images/register.jpg";
import CardContainer from "../../main/components/CardContainer/CardContainer";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "../../common/components/Navbar/Navbar";
import LogoutGoogle from "../components/LogoutGoogle";

export default function MenuUser() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar
        navigation={[
          { name: "User", href: "/My", current: false },
          
        ]}
        logged={{ function: true }}
      >
      </Navbar>
      <LogoutGoogle/>
      <div className="h-full">
      <CardContainer>
        <MenuButton
          title="Dates"
          src={Dates}
          buttonMenu="Dates"
          url="/vetAppointments"
        />
        <MenuButton
          title="My Pets"
          src={Register}
          buttonMenu="My Pets"
          url="/MyPet"
        />
        <MenuButton
          title="Vaccine Register"
          src={Vaccine}
          buttonMenu="Vaccine Register"
          url="/vaccineRegister"
        />
      </CardContainer>
      </div>
    </main>
  );
}
