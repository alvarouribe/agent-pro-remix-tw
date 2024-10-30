import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Agent Pro Remix Tailwind App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  console.log(`## Listings/live loader ## ${new Date()}`);
  return null;
}

export default function Live() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Listings live</h1>
    </div>
  );
}
