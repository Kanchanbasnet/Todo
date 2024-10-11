import { todoData } from "./data/todos";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
import AddTodoItem from "./components/AddTodoItem";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import EditTodoItem from "./components/EditTodoItem";
import { Todo } from "./types/todos";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState(todoData);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const handleCompletedChange = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const handleAddTodo = (title: string) => {
    setTodos((prevTodos) => [
      { id: prevTodos.length + 1, title, completed: false },
      ...prevTodos,
    ]);
    toast.success("Todo added successfully!");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    toast.success("Todo deleted successfully!");
  };

  const handleEditClick = (todo: Todo) => {
    setCurrentTodo(todo);
    setEditMode(true);
  };

  const handleEditTodo = (title: string, id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
    setEditMode(false);
    setCurrentTodo(null);
    toast.success("Todo updated successfully!");
  };

  return (
    <>
      <main className="py-10 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">Your Todos</h1>
        <div className="max-w-lg mx-auto p-5 bg-slate-100 rounded-md space-y-3">
          {!editMode ? (
            <AddTodoItem onSubmit={handleAddTodo} />
          ) : (
            <EditTodoItem todo={currentTodo!} onSubmit={handleEditTodo} />
          )}
          <div className="space-y-2 ">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-center justify-between">
                <TodoItem
                  todo={todo}
                  onCompletedChange={handleCompletedChange}
                />
                <div className="flex gap-3">
                  {!todo.completed ? (
                    <Pencil
                      color="green"
                      size={16}
                      cursor="pointer"
                      onClick={() => handleEditClick(todo)}
                    />
                  ) : null}
                  <Trash2
                    color="red"
                    size={16}
                    cursor="pointer"
                    onClick={() => handleDeleteTodo(todo.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
