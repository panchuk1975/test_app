import axios from "axios";

const instance = axios.create({
  //baseURL: "https://fir-auth-tutorial-9286b.firebaseio.com",
  baseURL: "http://localhost:3001",
});

export const profileAPI = {
  // - pack for all methods to work with endPoints
  addNote(newNote, number) {
    //- GET returns PROMIS, we subscribe to ше with THEN
    return instance
      .post(
       //"/profiles.json",
        "/employees",
        { ...newNote, number } // - and THEN returns other PROMIS
      )
      .then((response) => response.data); // - outside to US
  },

  changeNote(newNote, numberId) {
    return instance
      //.delete(`/profiles/${name}.json`)
      .put(`/employees/${numberId}`,{ ...newNote })  
      .then((response) => response.data);
  },

  deleteNote(numberId) {
    return instance
      //.delete(`/profiles/${name}.json`)
      .delete(`/employees/${numberId}`)
      .then((response) => response.data);
  },

  fetchNotes() {
    //return instance.get(`/profiles.json`).then((response) => response.data);
    return instance.get(`/employees`).then((response) => response.data);
  },

  fetchNote(numberId) {
    //return instance.get(`/profiles.json`).then((response) => response.data);
    return instance.get(`/employees/${numberId}`).then((response) => response.data);
  },
};
