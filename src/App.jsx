import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { initializeApp } from "firebase/app";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyC_iBsU-2U3nYdmdf2Ikgj6Q_vdbWuXJ8Y",
      authDomain: "frontend-automation-e5638.firebaseapp.com",
      projectId: "frontend-automation-e5638",
      storageBucket: "frontend-automation-e5638.firebasestorage.app",
      messagingSenderId: "17952683764",
      appId: "1:17952683764:web:c65cb287d0a91eb0e250a1",
    };
    initializeApp(firebaseConfig);
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
