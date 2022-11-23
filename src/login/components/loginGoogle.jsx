import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/auth.service";
const clientid =
  "934779679694-g266vfjuv77f2a1n10j7rn9ft5kc4feu.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();
  const onSuccess = async (res) => {
  
    console.log("LOGIN SUCCESS DOGGIE!!!! Current user: ", res.profileObj);
    try {
      await AuthService.logingoogle(res.profileObj.email, res.profileObj.name).then(
        (response) => {
          navigate("/menuUser");
          window.location.reload();
        },
        (error) => {
          console.log(error);
          localStorage.clear();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED :( res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        className="flex justify-center items-center w-full "
        clientId={clientid}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
