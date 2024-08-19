import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <div className="flex h-screen flex-col items-center justify-center gap-5 bg-slate-900 text-slate-200">
        <div className="mt-2 flex items-center justify-center">
          This is a demo React app using vite
        </div>
        <h1 className="text-center text-3xl font-bold underline">
          I just added this line as a heading
        </h1>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>

        <div className="flex flex-col items-center justify-center space-y-3">
          <button
            className="rounded bg-blue-400 px-2 py-1 hover:bg-blue-500 hover:shadow-lg"
            onClick={() => setCount((count) => count + 1)}
          >
            The new count is {count}
          </button>
          <p>I&lsquo;ve added a new line here, also the count it {count}</p>
          <img src="https://picsum.photos/200/300" alt="Random image" />
        </div>
        <p className="">
          This demo will display how we would like our continuous development
          and continuous deployment would look like.
        </p>
        <p className="text-2xl font-semibold">
          Where I am using Vercel that would be replaced by your hosting
          platform.
        </p>
      </div>
    </>
  );
}

export default App;
