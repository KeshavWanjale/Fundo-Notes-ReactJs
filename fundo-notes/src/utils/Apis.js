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



// Get all archived notes
export const getArchivedNotes = async () => {
  const token = localStorage.getItem("accessToken");

  let response = await axios.get(`${BASE_URL}/notes/archived`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Archived notes response:", response.data);
  return response;
};

// Get all trashed notes
export const getTrashedNotes = async () => {
  const token = localStorage.getItem("accessToken");

  let response = await axios.get(`${BASE_URL}/notes/trashed`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Trashed notes response:", response.data);
  return response;
};

export const archiveNote = async (noteId) => {
  const token = localStorage.getItem("accessToken");

  try {
    let response = await axios.patch(`${BASE_URL}/notes/${noteId}/toggle_archive`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Note archived:", response.data);
    return response;
  } catch (error) {
    console.error("Error archiving note:", error);
    throw error;
  }
};


// Move a note to trash by ID
export const trashNote = async (noteId) => {
  const token = localStorage.getItem("accessToken");

  try {
    let response = await axios.patch(`${BASE_URL}/notes/${noteId}/toggle_trash`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Note moved to trash:", response.data);
    return response;
  } catch (error) {
    console.error("Error moving note to trash:", error);
    throw error;
  }
};

// Delete a note by ID
export const deleteNote = async (noteId) => {
  const token = localStorage.getItem("accessToken");

  try {
    let response = await axios.delete(`${BASE_URL}/notes/${noteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Note deleted successfully:", response);
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};
