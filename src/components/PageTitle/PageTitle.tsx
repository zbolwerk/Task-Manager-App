import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Home",
  "/tasks": "Tasks",
  "/create-task": "Create Task",
};

export default function PageTitle() {
  const location = useLocation();
  const title = titles[location.pathname] || "Page";

  return (
    <div className="container">
      <h1>{title}</h1>
    </div>
  );
}
