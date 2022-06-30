import axios from "axios";

axios.defaults.baseURL= "https://vet4paws.herokuapp.com/";

const params = new URLSearchParams();

const signup = (email, password, name) => {

  params.append('email', email);
  params.append('name', name);
  params.append('password', password);
  
  
  return axios
    .post("auth/signup",
      params
    )
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
      return response.data ?? {};
    });
};

const login = (email, password) => {

  params.append('identifier', email);
  params.append('password', password);

  return axios
    .post("auth/signin", params)
    .then((response) => {
      
      var cadena = JSON.stringify(response.data.token).replace(/['"]+/g, '');

      localStorage.setItem("token", cadena);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return localStorage.getItem("token");
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
