import axios from "axios";

const apiUrl = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const postUserFromFirebase = (email) => {
  return apiUrl
    .post("/users/email", {
      email: email,
    })
    .then(({ data }) => {
      return data.user;
    })
    .catch((err) => console.log(err));
};
export const getUser = (email) => {
  return apiUrl
    .get(`/users/email/${email}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getLessonByTeacherAndClass = (teacher_id, class_id) => {
  return apiUrl
    .get(`/lessons/${teacher_id}/${class_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const getAssignmentsByTeacherAndClass = (teacher_id, class_id) => {
  return apiUrl
    .get(`/assignments/${teacher_id}/${class_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const postNewUser = (user) => {
  return apiUrl
    .post("/users/newuser", user)
    .then(({ data }) => {
      return data.user;
    })
    .catch((err) => console.log(err));
};

export const getClassesByTeacherID = (teacher_id) => {
  return apiUrl
  .get(`/classes/${teacher_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
}