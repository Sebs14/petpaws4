import Navbar from "../../common/components/Navbar/Navbar";
import AddVaccineCard from "../components/addVaccineCard";
import Capybara from "../../common/assets/images/capybara.jpg";

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
        <AddVaccineCard title="Add Vaccine" src={Capybara} />
      </div>
    </main>
  );
}
