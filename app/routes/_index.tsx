import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Agent Pro Remix Tailwind App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const ErrorBoundary = () => {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <h1>Error Something went wrong</h1>
    </div>
  );
}

export const loader = () => {
  console.log(`## Index loader ## ${new Date()}`);
  const isAuthenticated = false;
  if (isAuthenticated) {
    throw redirect("/listings/live");
  } else {
    // throw new Error('DIED'); // This will trigger the ErrorBoundary
    // throw new Response(null); // This will trigger the ErrorBoundary
    throw redirect("/login");
  }
}

export default function Index() {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <h1>Agent Pro in Remix with Tailwind</h1>
    </div>
  );
}
