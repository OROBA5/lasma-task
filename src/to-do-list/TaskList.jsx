import React from 'react';
import { Link } from 'react-router-dom';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:80/api/task')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching tasks');
        }
        return response.json();
      })
      .then(data => {
        console.log('JSON response:', data); // Add this line to log the JSON response
        this.setState({ tasks: Object.values(data), error: null });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  
  

  render() {
    const { tasks, error } = this.state;

    return (
      <div>
        <h1>Task List</h1>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <h3>{task.Title}</h3>
                <p>End Date: {task.EndDate}</p>
                <p>Description: {task.Description || 'N/A'}</p>
                <p>Create Date: {task.CreateDate}</p>
                <p>Completed: {task.Compleated ? 'Yes' : 'No'}</p>
                <Link to= {`task/${task.id}/edit`}> Edit</Link>
                <button>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TaskList;
