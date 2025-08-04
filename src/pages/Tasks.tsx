import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";

interface Task {
  id: number;
  title: string;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div>
      <PageTitle />
      <button
        onClick={() => navigate("/create-task")}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Create New Task
      </button>
      
{/*       <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            {task.title}
          </li>
        ))}
      </ul>  */}
      
    </div>
  );
}
