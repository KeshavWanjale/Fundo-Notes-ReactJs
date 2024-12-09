import axios from 'axios';


const BASE_URL = 'http://127.0.0.1:8000/api';

export const RegisterApiCall = (userData) => {
    return axios.post(`${BASE_URL}/user/register`, userData)
      .then((response) => response.data)
      .catch((error) => {
        throw error.response ? error.response.data : error;
      });
};


export const LoginApiCall = (loginData) => {
    return axios.post(`${BASE_URL}/user/login`, loginData)
      .then((response) => {
        const { data } = response;
        if (data.status === "success") {
          localStorage.setItem('userEmail', data.data.email); 
          localStorage.setItem('accessToken', data.access);
        }
        return data; 
      })
      .catch((error) => {
        throw error.response ? error.response.data : error;
      });
};

export const getAllNotesApiCall = async () => {
  const token = localStorage.getItem("accessToken");
  console.log("token:", token);

  let response = await axios.get(`${BASE_URL}/notes/` , {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Note response:", response.data);
  return response.data;
};

// Create a new note
export const addNoteApi = async (data) => {
  const token = localStorage.getItem("accessToken");
  console.log("token:", token);

  let response = await axios.post(`${BASE_URL}/notes/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Note creation response:", response.data);
  return response.data;
};