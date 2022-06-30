import Petview from "../components/PetView";
import Navbar from "../../common/components/Navbar/Navbar";
import Image from "../../common/assets/images/capybara.jpg";

export default function UserPetView() {
  return (
    <main>
      <Navbar
        navigation={[
          { name: "User", href: "/", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />
      <div className='w-full h-screen flex flex-col justify-center items-center p-8'>
        <Petview
          src={Image}
          id='009978'
          petName='Manuel de yisus'
          petAge='21'
          petRaze='brown capybara'
          petSpecies='capybara'
        />
      </div>
    </main>
  );
}
