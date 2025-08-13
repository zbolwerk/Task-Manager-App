import React from "react";

interface CreateTaskFormProps {
  taskName: string;
  setTaskName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  priority: number;
  setPriority: (value: number) => void;
  dueDate: string;
  setDueDate: (value: string) => void;
  timeEffort: number;
  setTimeEffort: (value: number) => void;
  interestLevel: number;
  setInterestLevel: (value: number) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
  taskName,
  setTaskName,
  description,
  setDescription,
  priority,
  setPriority,
  dueDate,
  setDueDate,
  timeEffort,
  setTimeEffort,
  interestLevel,
  setInterestLevel,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Enter task name"
        />
      </div>

      <div>
        <label className="block font-medium">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="Enter task description"
        />
      </div>

      <div>
        <label className="block font-medium">Priority (1-5):</label>
        <input
          type="number"
          min={1}
          max={5}
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Due Date:</label>
        <input
          type="Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value.toString())}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Time Effort (1-10):</label>
        <input
          type="number"
          min={1}
          max={10}
          value={timeEffort}
          onChange={(e) => setTimeEffort(Number(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Interest Level (1-10):</label>
        <input
          type="number"
          min={1}
          max={10}
          value={interestLevel}
          onChange={(e) => setInterestLevel(Number(e.target.value))}
          className="border p-2 w-full rounded"
        />
      </div>
    </div>
  );
};

export default CreateTaskForm;
