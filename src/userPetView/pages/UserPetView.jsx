import Petview from "../components/PetView";
import Navbar from "../../common/components/Navbar/Navbar";
import Image from "../../common/assets/images/bh.jpeg";
import MyPets from "../../Services/myPets"
import { useEffect, useState } from "react";

export default function UserPetView() {

  const [pets, setPets] = useState([]);

  useEffect(() =>{
    MyPets().then(
      (response) => {
        setPets(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
 

  return (
    <main>
      <Navbar
        navigation={[
          { name: "User", href: "/", current: false },
          { name: "Log Out", href: "/", current: false },
        ]}
        logged={{ function: true }}
      />
      <div className='w-full h-screen flex flex-row flex-wrap justify-around items-center p-8'>
        
        {pets.map((item) => 
        <Petview
          src={Image}
          id= {item.id}
          petName={item.name}
          petAge={item.age}
          petRaze={item.breed}
          petSpecies={item.specie}
        />
        )}
      </div>
    </main>
  );
}
