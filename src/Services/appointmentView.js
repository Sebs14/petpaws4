import axios from "axios";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

const getMyAppointments = () => {
    return axios
    .get("appointment/my-appointments", config)
};

export default getMyAppointments;