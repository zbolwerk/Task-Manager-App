import { useState } from 'react';

function InputComponent() {
  const [value, setValue] = useState('');

  return (
    <div className="p-4">
      <label htmlFor="simpleInput" className="block text-sm font-medium text-gray-700">
        Your Input: 
      </label>
      <input
        id="simpleInput"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Type something..."
      />
      <p className="mt-2 text-sm text-gray-600">You typed: {value}</p>
    </div>
  );
}

export default InputComponent;