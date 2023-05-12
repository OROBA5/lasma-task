import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TaskList from './to-do-list/TaskList';
import CreateTaskComponent from './to-do-list/CreateTask';
import EditTask from './to-do-list/EditTask';

function App() {
  return (
    <div className="App">
      <h5>TODO list</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Tasks</Link>
            </li>
            <li>
              <Link to="list/create">Create Task</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<TaskList />} />
          <Route path="list/create" element={<CreateTaskComponent />} />
          <Route path="task/:id/edit" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
