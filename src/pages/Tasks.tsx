import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle/PageTitle";

export default function Tasks() {
  const navigate = useNavigate();
  return (
    <div>
      <PageTitle />
      <button
        onClick={() => navigate("/create-task")}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Create New Task
      </button>
    </div>
  );
}
