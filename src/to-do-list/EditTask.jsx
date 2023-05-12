import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function EditTaskComponent() {
  const { id } = useParams();
  const history = useHistory();
  const [task, setTask] = useState({});
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = () => {
    axios.get(`http://localhost:80/api/task/${id}`)
      .then((response) => {
        setTask(response.data);
        setInputs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:80/api/task/${id}`, inputs)
      .then((response) => {
        console.log(response.data);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={inputs.title || ''} onChange={handleChange} required /><br /><br />

        <label htmlFor="endDate">End Date:</label>
        <input type="datetime-local" id="endDate" name="endDate" value={inputs.endDate || ''} onChange={handleChange} required /><br /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea id="description" name="description" value={inputs.description || ''} onChange={handleChange} rows="4" cols="50"></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditTaskComponent;
