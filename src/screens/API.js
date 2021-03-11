// import { API } from "../../backend";

// const API = 'http://localhost:3100/api/';


export const signup = user => {
    return fetch(`http://localhost:3100/api/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };