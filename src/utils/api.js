import axios from "axios";

const apiUrl = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const postUserFromFirebase = (email) => {
  return apiUrl
    .post("/users/email", {
      email: email,
    })
    .then((response) => {
      console.log("🚀 ~ postUserFeomFirebase ~ response.data:", response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
};

/* 

example of request api function 

export function function-name() {
  return apiUrl.get('/student/assignments').then((response) => {
    return response.data;
  });
}

*/
