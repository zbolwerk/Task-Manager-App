import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";
import TaskTable from "../components/TaskTable/TaskTable";


interface Task {
    id: number;
    title: string;
    description: string;
    priority: number;
    dueDate: number;
    timeEffort: number;
    interestLevel: number;
  }

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch tasks:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <nav className="topnav bg-blue-600 text-white p-4 flex space-x-4 shadow-md"></nav>
      <PageTitle />
      <button
        onClick={() => navigate("/create-task")}
        className="nav-button bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Create Task
      </button>

      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <TaskTable tasks={tasks} />
      )}
    </div>
  );
}
