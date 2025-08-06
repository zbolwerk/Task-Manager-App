import { useState } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import CreateTaskForm from "../components/CreateTaskForm";
/* import InputComponent from "../components/SingleInput/SingleInput";
 */
export default function CreateTask() {
  const [id, setID] = useState("");
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [timeEffort, setTimeEffort] = useState(1);
  const [interestLevel, setInterestLevel] = useState(1);

  const handleSubmit = async () => {
    if (!taskName.trim()) {
      alert("Task name is required");
      return;
    }
    const task = {
      id: Date.now(),
      taskName: taskName.trim(),
      description,
      priority: Number(priority),
      dueDate: new Date(dueDate).getTime(),
      timeEffort: Number(timeEffort),
      interestLevel: Number(interestLevel),
    };

    try {
      const res = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const responseText = await res.text();
      console.log("Response from server:", responseText);

      if (res.ok) {
        alert("Task created!");
        setID("");
        setTaskName("");
        setDescription("");
        setPriority(1);
        setDueDate("");
        setTimeEffort(1);
        setInterestLevel(1);
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
      <CreateTaskForm
        taskName={taskName}
        setTaskName={setTaskName}
        description={description}
        setDescription={setDescription}
        priority={priority}
        setPriority={setPriority}
        dueDate={dueDate}
        setDueDate={setDueDate}
        timeEffort={timeEffort}
        setTimeEffort={setTimeEffort}
        interestLevel={interestLevel}
        setInterestLevel={setInterestLevel}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Save Task
      </button>

      {/* <InputComponent value={taskName} onChange={setTaskName} />
      <button
        onClick={handleSubmit}
        className="ml-4 mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create Task
      </button> */}
    </div>
  );
}
