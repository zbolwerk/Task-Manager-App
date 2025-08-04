import styles from './SingleInput.module.css';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

function InputComponent({ value, onChange }: InputProps) {
  return (
    <div className="p-4">
      <label htmlFor="simpleInput" className="block text-sm font-medium text-gray-700">
        Task Title:
      </label>
      <input
        id="simpleInput"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.largeInput} border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        placeholder="Type the name of your task..."
      />
    </div>
  );
}

export default InputComponent;
