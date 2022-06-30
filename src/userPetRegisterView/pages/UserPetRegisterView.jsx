import MenuCard from "../components/MenuCard";
import Navbar from "../../common/components/Navbar/Navbar";
import MenuCardContainer from "../components/MenuCardComponent";
import Plus from "../../common/assets/images/plus.png";
import Check from "../../common/assets/images/checked.png";

export default function Services() {
  return (
    <main className='w-full h-full flex flex-col'>
      <Navbar
        navigation={[
          { name: "User", href: "/", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />
      <MenuCardContainer>
        <MenuCard
          title='Add pet'
          color='bg-gray-300'
          src2={Check}
        />
      </MenuCardContainer>
    </main>
  );
}
