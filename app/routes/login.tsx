import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Agent Pro Remix Tailwind App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <section className="w-1/2 h-screen">
        <h1>Login</h1>
      </section>

      <section className="w-1/2 h-screen flex flex-col items-center justify-center text-center gap-2 bg-gray-100">
        <img
          src="/assets/house-login.png"
          alt="Real Estate House"
          className="block w-1/2"
        />
        <h2 className="text-2xl">Get your name out there</h2>
        <p className="text-base leading-normal">Be seen by 1.1 million property<br/>seekers a month</p>
      </section>
    </div>
  );
}
