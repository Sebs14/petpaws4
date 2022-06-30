// eslint-disable-next-line import/no-named-as-default
import Navbar from "../../common/components/Navbar/Navbar";
import LoginCard from "../components/loginCard";
import Google from "../../common/assets/images/google.png";

export default function Login() {
  return (
    <main>
      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "About Us", href: "/AboutUs", current: false },
          { name: "Login", href: "/Login", current: true },
          { name: "Register", href: "/Register", current: false },
        ]}
        logged={{ function: false }}
      />
      <div className="w-full h-screen flex flex-col justify-center items-center p-8">
        <LoginCard title="Continue with" src={Google} buttonLogin="Google" />
      </div>
    </main>
  );
}
