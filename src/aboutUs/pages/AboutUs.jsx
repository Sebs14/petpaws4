import VetAbout from "../components/VetAbout";
import Navbar from "../../common/components/Navbar/Navbar";
import IContainer from "../components/iContainer";
import Src from "../../common/assets/images/dogAboutUs.png";
import Footer from "../../common/components/Footer/Footer";

export default function AboutUs() {
  return (
    <main className="text-black dark:text-black">
      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "About Us", href: "/AboutUs", current: true },
          { name: "Login", href: "/Login", current: false },
          { name: "Register", href: "/Register", current: false },
        ]}
        logged={{ function: false }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen text-black dark:text-black">
        <IContainer src={Src} title="puppy" />
        <VetAbout
          title="About us"
          subtitle="Veterinary 4 paws"
          description="The V4P is the nation's leading advocate for the veterinary profession. We protect, promote and advance the needs of all veterinarians and those they serve.


This is our passion. This is our profession. This is the V4P."
        />
      </div>

      <Footer />
    </main>
  );
}
