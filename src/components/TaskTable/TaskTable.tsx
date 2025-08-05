import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  priority: number;
  dueDate: number;
  timeEffort: number;
  interestLevel: number;
}

interface TaskTableProps {
  tasks: Task[];
}

export default function TaskTable({ tasks }: TaskTableProps) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {/* <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID</th> */}
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Title</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Priority</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">DueDate</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">TimeEffort</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">InterestLevel</th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr key={task.id}>
              {/* <td className="px-6 py-4 text-sm text-gray-900">{task.id}</td> */}
              <td className="px-6 py-4 text-sm text-gray-900">{task.title}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{task.description}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{task.priority}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{task.dueDate}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{task.timeEffort}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{task.interestLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
