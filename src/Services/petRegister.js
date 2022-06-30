import axios from "axios";
import React from "react"
import authHeader from "../Services/auth-header"

axios.defaults.baseURL= "https://vet4paws.herokuapp.com/";

const params = new URLSearchParams();
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

const registerPet = (name, color, age, breed, specie) => {

    params.append('name', name);
    params.append('color', color);
    params.append('age', age);
    params.append('breed', breed);
    params.append('specie', specie);
  
    return axios
      .post("pet/register", params, config)
      .then((response) => {
        return response.data;
      });
  };



export default registerPet;