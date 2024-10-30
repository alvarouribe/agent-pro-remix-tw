import type { MetaFunction } from "@remix-run/node";

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

export default function Index() {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <h1>Agent Pro in Remix with Tailwind</h1>
    </div>
  );
}
