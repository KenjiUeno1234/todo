// import * as schema from "~/database/schema";

import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData();
  let name = formData.get("name");
  let email = formData.get("email");
  if (typeof name !== "string" || typeof email !== "string") {
    return { guestBookError: "Name and email are required" };
  }

  name = name.trim();
  email = email.trim();
  if (!name || !email) {
    return { guestBookError: "Name and email are required" };
  }

  // Temporarily disable database
  console.log("Would add to database:", { name, email });
  return { success: true };
}

export async function loader({ context }: Route.LoaderArgs) {
  // Temporarily disable database to test app functionality
  return {
    guestBook: [
      { id: 1, name: "Sample User 1" },
      { id: 2, name: "Sample User 2" }
    ],
    message: "Hello from React Router v7!",
  };
}

export default function Home({ actionData, loaderData }: Route.ComponentProps) {
  return (
    <Welcome
      guestBook={loaderData.guestBook}
      guestBookError={actionData?.guestBookError}
      message={loaderData.message}
    />
  );
}
