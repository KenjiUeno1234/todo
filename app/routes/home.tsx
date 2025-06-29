import type { Route } from "./+types/home";
import { TodoList } from "~/components/TodoList";
import type { Todo } from "~/types/todo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Todo App" },
    { name: "description", content: "Simple and clean todo list application" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  // Hardcoded todo data for testing
  const todos: Todo[] = [
    {
      id: 1,
      title: "Learn React Router v7",
      completed: true,
      created_at: "2024-01-15T10:00:00Z"
    },
    {
      id: 2,
      title: "Build a todo app",
      completed: false,
      created_at: "2024-01-16T09:30:00Z"
    },
    {
      id: 3,
      title: "Deploy to Cloudflare Workers",
      completed: false,
      created_at: "2024-01-17T14:20:00Z"
    },
    {
      id: 4,
      title: "Add unit tests",
      completed: false,
      created_at: "2024-01-18T11:15:00Z"
    }
  ];

  return { todos };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <TodoList todos={loaderData.todos} />;
}
