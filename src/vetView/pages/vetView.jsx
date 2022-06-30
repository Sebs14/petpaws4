import Button from "../../vetView/components/button/button";
import List from "../../vetView/components/List/List";
import Image from "../../common/assets/images/vet.jpg";
import VetContainer from "../../vetView/components/buttonContainer/buttonContainer";
// eslint-disable-next-line import/no-named-as-default
import Navbar from "../../common/components/Navbar/Navbar";

export default function VetView() {
  return (
    <main className='w-full h-screen flex flex-col'>
      <Navbar
        navigation={[
          { name: "User", href: "/", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />

      <VetContainer>
        <List
          src={Image}
          title='imagen'
          name='Reynaldo'
          hour='11:00 a.m'
          desc='Nauseas y malestar general'
          date='21/06/2022'
        />
      </VetContainer>

      <VetContainer>
        <Button title='Citas' />
        <Button title='Mascotas Registradas' />
        <Button title='Registro de Vacunas' />
      </VetContainer>
    </main>
  );
}
