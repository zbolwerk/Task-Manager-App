import { useNavigate } from "react-router-dom";
import "./TopNav.css"


export default function TopNav() {
  const navigate = useNavigate();

  return (
    <nav className="topnav bg-blue-600 text-white p-4 flex space-x-4 shadow-md">
      <button
        onClick={() => navigate("/")}
        className="nav-button bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Home
      </button>
      <button
        onClick={() => navigate("/tasks")}
        className="nav-button bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Tasks
      </button>
    </nav>
  );
}
