import Container from "../../userPetRegisterView/components/MenuCardComponent";
import Card from '../components/card';
import Navbar from "../../common/components/Navbar/Navbar";
import Check from "../../common/assets/images/checked.png";

export default function VaccineRegister(){
    return(
        <main>
            <Navbar
            navigation={[
            { name: "User", href: "/", current: false },
            { name: "Log Out", href: "/", current: false },
            ]}
            logged={{ function: true }}
            />  
            <div className="w-full h-screen flex flex-col justify-center items-center p-8">
                <Container>
                <Card
                    title='Register vaccine'
                    color='bg-gray-300'
                    src2={Check}
                    />
                </Container>
            </div>  
        </main>
    );
}