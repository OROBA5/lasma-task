import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateTaskComponent() {
    const Navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:80/api/task/save', inputs).then(function(response){
        console.log(response.data);
        Navigate('/');
    });
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} required /><br /><br />

        <label htmlFor="endDate">End Date:</label>
        <input type="datetime-local" id="endDate" name="endDate" onChange={handleChange} required /><br /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea id="description" name="description" onChange={handleChange} rows="4" cols="50"></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateTaskComponent;
