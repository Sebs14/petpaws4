import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/menuUser");
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

    return(
        <form onSubmit={handleLogin}>
        <div className="mb-4">
          <div className="mb-4 ">
            <label
              class="block mb-2 text-sm font-bold dark:text-white"
              htmlFor="firstName"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold dark:text-white"
            htmlFor="registerEmail"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 focus:outline-none focus:shadow-outline dark:bg-emerald-800 dark:hover:bg-emerald-900"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    );
}

export default Login;