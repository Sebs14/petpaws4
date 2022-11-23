import { GoogleLogin } from "react-google-login";

const clientid =
  "934779679694-g266vfjuv77f2a1n10j7rn9ft5kc4feu.apps.googleusercontent.com";

const onSuccess = (res) => {
  console.log("LOGIN SUCCESS DOGGIE!!!! Current user: ", res.profileObj);
};
const onFailure = (res) => {
  console.log("LOGIN FAILED :( res: ", res);
};

function Login() {
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
