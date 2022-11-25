import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientid =
  "934779679694-g266vfjuv77f2a1n10j7rn9ft5kc4feu.apps.googleusercontent.com";



function Logout() {
  const navigate = useNavigate();
  const onSuccess = () => {
    console.log("Log out succcessfull!");
    navigate("/");
    authService.logout();
    window.location.reload();
  };
  return (
    <div id="signOutButton" className="flex justify-end pr-8">
      <GoogleLogout
        className="flex justify-center items-center "
        clientId={clientid}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
