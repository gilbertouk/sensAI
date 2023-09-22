import React, { useState, useEffect } from "react";
import { postAssignment, getClassesByTeacherID } from "../utils/api";

const TeacherAssignmentsNew = ({ user }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getClassesByTeacherID(user.id)
        .then(({ classes }) => {
          setClasses(classes);
          if (classes.length > 0) setSelectedClass(classes[0].id);
        })
        .catch((err) => {
          console.log("Error Fetching Classes:", err);
          setLoading(false);
        });
    }
  }, [user]);

  useEffect(() => {
    if (selectedClass && user) {
      setLoading(false);
    }
  }, [selectedClass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && user.id && selectedClass) {
      postAssignment(user.id, selectedClass, title, body, dueDate)
        .then((data) => console.log("Assignment Posted:", data))
        .catch((err) => console.error("Error Posting Assignment:", err));
    } else {
      console.error("User ID or Selected Class ID not available");
    }
  };
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Teacher Assignments - New</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Class:
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <button type="submit">Post Assignment</button>
      </form>
    </div>
  );
};

export default TeacherAssignmentsNew;
