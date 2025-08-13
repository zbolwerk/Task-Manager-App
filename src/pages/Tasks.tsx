import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";
import DataTable from "../components/DataTable/DataTable";

interface Task {
  id: string;
  taskName: string;
  description: string;
  priority: number;
  dueDate: string;
  timeEffort: number;
  interestLevel: number;
}

const columns: { key: keyof Task; label: string }[] = [
  { key: "id", label: "ID" },
  { key: "taskName", label: "TaskName" },
  { key: "description", label: "Description" },
  { key: "priority", label: "Priority" },
  { key: "dueDate", label: "DueDate" },
  { key: "timeEffort", label: "TimeEffort" },
  { key: "interestLevel", label: "InterestLevel" },
];

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

  const handleEdit = (task: Task) => {
    alert(`Edit: ${task.taskName}`);
    // Replace this with a modal or a route change to an edit page
  };

  const handleDelete = (task: Task) => {
    if (confirm(`Delete task "${task.taskName}"?`)) {
      setTasks((prev) => prev.filter((t) => t.id !== task.id));
    }
  };

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
        <DataTable
          columns={columns}
          data={tasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
