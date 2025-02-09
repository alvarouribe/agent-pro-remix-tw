import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Agent Pro Remix Tailwind App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  console.log(`## Login loader ## ${new Date()}`);
  return null;
}

export const action = async ({ request }: ActionFunctionArgs) => {
  console.log(`## Action ## ${new Date()}`);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const intent = formData.get("intent");
  console.log(`Email: ${email}, Password: ${password} Intent: ${intent}`);
  // Try to login the user
  // If the user is logged in, redirect to the listings/live page
  return redirect("/listings/live");
  // If the user is not logged in, redirect to the login page
}

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <section className="w-1/2 h-screen flex items-center justify-center">

      <Form method="POST" className="w-1/2 flex flex-col gap-2">
          <h1 className="text-2xl mb-6 font-bold">Login</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring"
            />
          </div>
          <button
            type="submit"
            name="intent"
            value="login"
            className="w-full p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Log in
          </button>

          <div className="flex flex-col gap-3 mt-2 mb-6">
            <a className="text-center text-indigo-600 font-semibold" href="#">
              Forgot password
            </a>
            <hr />
            <p className="text-center">
              Not registered yet? <a className="text-indigo-600 font-semibold" href="#">Create an account</a>
            </p>
          </div>
        </Form>

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
