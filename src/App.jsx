import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center flex-col gap-5 bg-slate-900 h-screen text-slate-200">
      <div className="flex items-center justify-center mt-2">This is a simple page</div>
      <h1 className="text-3xl font-bold underline text-center">I just added this line as a heading</h1>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="flex flex-col items-center justify-center space-y-3">
        <button
          className="bg-blue-400 px-2 py-1 rounded"
          onClick={() => setCount((count) => count + 1)}>
          The new count is {count}
        </button>
        <p>I&lsquo;ve added a new line here, also the count it {count}</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
