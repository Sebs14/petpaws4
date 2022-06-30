import Navbar from "../../common/components/Navbar/Navbar";
import CardAppointmentView from "../components/CardAppointmentView";

export default function VetAppointment() {

  return (
    <main>
      <Navbar
        navigation={[
          { name: "User", href: "/", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />
      <div className="w-full h-screen flex flex-col   items-center p-8">
        <CardAppointmentView title="Appointment Table" />
      </div>
    </main>
  );
}
