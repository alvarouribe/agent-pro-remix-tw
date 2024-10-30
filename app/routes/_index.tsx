import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Agent Pro Remix Tailwind App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  console.log(`## Index loader ## ${new Date()}`);
  return null;
}

export const action = () => {
  console.log(`## Action ## ${new Date()}`);
  return null;
}

export default function Index() {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <h1>Agent Pro in Remix with Tailwind</h1>

      <Form method="POST" className="rounded-xl bg-slate-500 hover:bg-slate-900 text-white p-5 cursor-pointer">
        <button type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
