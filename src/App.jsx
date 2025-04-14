import { useEffect, useState } from "react";
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
    </>
  );
}

export default App;
