import axios from "axios";

axios.defaults.baseURL= "https://vet4paws.herokuapp.com/";

const params = new URLSearchParams();
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

const addAppointment = (dateAppointment, symptoms, idPet) => {

    params.append('dateAppointment', dateAppointment);
    params.append('symptoms', symptoms);
    params.append('idPet', idPet);

  
    return axios
      .post("appointment/add", params, config)
      .then((response) => {
        return response.data;
      });
  };



export default addAppointment;