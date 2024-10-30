import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Agent Pro Remix Tailwind App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  console.log(`## Listings/live loader ## ${new Date()}`);
  return json({ message: "Listings live" });
}

export default function Live() {
  const data = useLoaderData<typeof loader>();


  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold">Listings live</h1>
      <h2 className="text-xl">Message: `{data.message}`</h2>
    </div>
  );
}
