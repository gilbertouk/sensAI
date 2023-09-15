import axios from "axios";

const apiUrl = axios.create({
  baseURL: "http://localhost:9090/api",
});

/* 

example of request api function 

export function function-name() {
  return apiUrl.get('/student/assignments').then((response) => {
    return response.data;
  });
}

*/
