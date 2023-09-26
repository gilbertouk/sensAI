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
};

export const getLessonsByStudentId = (user_id) => {
  return apiUrl
    .get(`/student/${user_id}/lessons`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const getAssignmentByStudentId = (student_id) => {
  return apiUrl
    .get(`/student/${student_id}/assignments`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postAssignment = (teacher_id, class_id, title, body, due_date) => {
  return apiUrl
    .post(`/assignments/${teacher_id}/${class_id}`, {
      title,
      body,
      due_date,
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const getAssignmentsByTeacherId = (teacher_id) => {
  return apiUrl
    .get(`/assignments/${teacher_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAssignmentsByAssignmentId = (student_id, assignment_id) => {
  return apiUrl
    .get(`/student/${student_id}/assignments/${assignment_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getStudentsByTeacherClass = (teacher_id, class_id) => {
  return apiUrl
    .get(`/classes/${teacher_id}/${class_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};


export const getAssignmentsByTeacherIdAndClassID = (teacher_id, class_id) => {
  return apiUrl
    .get(`/assignments/${teacher_id}/${class_id}`)

    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

}


export const deleteAssignmentByAssignmentID = (assignment_id) => {
  return apiUrl
    .delete(`/assignments/${assignment_id}`)
}

export const deleteLessonByLessonID = (lesson_id) => {
  return apiUrl
    .delete(`/lessons/${lesson_id}`)
}


export const postLesson = (teacher_id, class_id, title, body, due_date) => {
  return apiUrl
    .post(`/lessons/${teacher_id}/${class_id}`, {
      title,
      body,
    })
    .then(({ data }) => {
      return data;
    }).catch((err) => {
      console.log(err);
    });
};

export const patchStudentAssignmentByAssignmentId = (
  student_id,
  assignment_id,
  body
) => {
  return apiUrl
    .patch(`/student/${student_id}/assignments/${assignment_id}`, body)
      .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

};

export const getLesson = (lesson_id) => {
  return apiUrl.get(`/lessons/${lesson_id}`).then(({data})=> {
    return data;
  })
  .catch((err)=> {
    console.log(err);
  })
};

export const getAssignmentsByTeacherIDAndClassID = (teacher_id, class_id) => {
  return apiUrl
    .get(`/assignments/${teacher_id}/${class_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const patchUser = (
  user_id,
  name,
  surname,
  email,
  disability,
) => {
  console.log(surname)
  return apiUrl
    .patch(`/users/${user_id}`, {
      name,
      surname,
      email,
      disability})
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};