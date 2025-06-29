import { TodoItem } from "./TodoItem";
import type { Todo } from "~/types/todo";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Todo List
      </h1>
      
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No todos yet!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Total: {todos.length} todos | 
          Completed: {todos.filter(t => t.completed).length} | 
          Remaining: {todos.filter(t => !t.completed).length}
        </p>
      </div>
    </div>
  );
};