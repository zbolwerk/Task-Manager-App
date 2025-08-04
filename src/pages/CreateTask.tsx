import { useState } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import InputComponent from "../components/SingleInput/SingleInput";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: taskName }),
      });

      if (res.ok) {
        alert("Task created!");
        setTaskName(""); // Clear input after success
      } else {
        alert("Failed to create task.");
      }
    } catch (err) {
      console.error("Error creating task:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div>
      <PageTitle />
      <InputComponent value={taskName} onChange={setTaskName} />

      <button
        onClick={handleSubmit}
        className="ml-4 mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Task
      </button>
    </div>
  );
}
