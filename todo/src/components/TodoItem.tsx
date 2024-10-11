import { Todo } from "../types/todos";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

const TodoItem = ({ todo , onCompletedChange}: TodoItemProps) => {
  return (
    <>
      <label className="flex items-center gap-2 border rounded p-2">
        <input type="checkbox" 
        checked={todo.completed}
        onChange={(e)=> onCompletedChange(todo.id, e.target.checked)} 
        className="scale-125" />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
    </>
  );
};

export default TodoItem;
