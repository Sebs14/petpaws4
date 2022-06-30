import List from "../../vetPetRegisterView/components/List/List";
import Image from "../../common/assets/images/vet.jpg";
import ViewContainer from "../../vetPetRegisterView/components/viewContainer/viewContainer";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "../../common/components/Navbar/Navbar";

export default function VetPetRegisterView() {
  return (
    <main className='w-full h-screen flex flex-col'>
      <Navbar
        navigation={[
          { name: "User", href: "/", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />

      <ViewContainer>
        <List src={Image} title='imagen' name='Reynaldo' />
      </ViewContainer>
    </main>
  );
}
