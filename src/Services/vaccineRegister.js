import axios from "axios";
const params = new URLSearchParams();
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

const vaccineRegister = (type, date, reinforcement, idPet) => {
    params.append('type', type);
    params.append('date', date);
    params.append('reinforcement', reinforcement);
    params.append('idPet', idPet);

    return axios
        .post("vaccine/add", params, config)
        .then((response) => {
            return response.data;
        });
};



export default vaccineRegister;