import { GoogleLogout } from "react-google-login";

const clientid =
  "934779679694-g266vfjuv77f2a1n10j7rn9ft5kc4feu.apps.googleusercontent.com";
function Logout() {
  const onSuccess = () => {
    console.log("Log out succcessfull!");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        className="flex justify-center items-center w-full "
        clientId={clientid}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
export default Logout;
