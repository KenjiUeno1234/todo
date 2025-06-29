import type { Todo } from "~/types/todo";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
        className="mr-3 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
      />
      <div className="flex-1">
        <p className={`text-gray-900 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.title}
        </p>
        <p className="text-sm text-gray-500">
          {new Date(todo.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};