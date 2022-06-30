import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/auth.service";

const Form = () =>  {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email, password, name).then(
        (response) => {
          navigate("/login");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="mb-4">
        <div className="mb-4 ">
          <label
            className="block mb-2 text-sm font-bold dark:text-white"
            htmlFor="Name"
          >
            Name
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
            />
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold dark:text-white"
          htmlFor="registerEmail"
        >
          Email
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="mb-4 md:mr-2 md:mb-0">
        <label
          className="block mb-2 text-sm font-bold dark:text-white"
          htmlFor="password"
        >
          Password
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 focus:outline-none focus:shadow-outline dark:bg-emerald-800 dark:hover:bg-emerald-900"
          type="submit"
        >
          Register Account
        </button>
      </div>
    </form>
  );
}

export default Form;
