import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Tasks from "./pages/Tasks.tsx";
import TopNav from "./components/TopNav/TopNav.tsx";
import CreateTask from "./pages/CreateTask.tsx";

function App() {
  return (
    <>
      <TopNav />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/create-task" element={<CreateTask />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
