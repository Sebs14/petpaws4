import axios from "axios";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  }

const getMyPets = () =>{
    return axios
    .get("pet/my-pets", config)
};

export default getMyPets;