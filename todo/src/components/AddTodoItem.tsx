import React, { useState } from "react";

interface AddTodoItemProps {
  onSubmit: (title: string) => void;
}

const AddTodoItem = ({ onSubmit }: AddTodoItemProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;

    onSubmit(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new Todo..."
        className="w-96 rounded-md border p-2 border-gray-300 "
      />

      <button
        className="bg-slate-900 text-white w-16 rounded-md h-10 hover:bg-gray-800"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoItem;
