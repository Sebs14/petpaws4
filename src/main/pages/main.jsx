import Navbar from "../../common/components/Navbar/Navbar";
import Carousel from "../components/carousel";
import Footer from "../../common/components/Footer/Footer";
import CardContainer from "../components/CardContainer/CardContainer";
import Card from "../components/Card/Card";

import Mission from "../../common/assets/images/mission.jpg";
import Vision from "../../common/assets/images/vision.jpg";
import Goal from "../../common/assets/images/goal.jpg";

export default function Main() {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar
        navigation={[
          { name: "Home", href: "/", current: true },
          { name: "About Us", href: "/AboutUs", current: false },
          { name: "Login", href: "/Login", current: false },
          { name: "Register", href: "/Register", current: false },
        ]}
        logged={{ function: false }}

      />

      <div>
        <CardContainer>
          <Card
            src={Vision}
            title="Vision"
            description="The veterinary four paws vision is to be the trusted leader in protecting, promoting and advancing a strong, unified veterinary profession that meets the needs of society."
            color="bg-emerald-300"
          />
          <Card
            src={Mission}
            title="Mission"
            description="The mission of the Association is to lead the profession by advocating for our members, and advancing the science and practice of veterinary medicine to improve animal and human health."
            color="bg-red-400"
          />
          <Card
            src={Goal}
            title="Goal"
            description="The association's goal is focused squarely on our efforts to grow member value by increasing member satisfaction and market share across all segments of the profession."
            color="bg-blue-400"
          />
        </CardContainer>
      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
