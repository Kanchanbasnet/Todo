import React, { useState } from "react";
import { Todo } from "../types/todos";

interface EditTodoItemProps {
    todo: Todo
  onSubmit: (title: string, id:number) => void;
}

const EditTodoItem = ({ todo, onSubmit }: EditTodoItemProps) => {
  const [input, setInput] = useState(todo.title);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") return;

    onSubmit(input, todo.id);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Edit"
        className="w-96 rounded-md border p-2 border-gray-300 "
      />

      <button
        className="bg-slate-900 text-white w-16 rounded-md h-10 hover:bg-gray-800"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default EditTodoItem;
