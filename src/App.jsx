import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FirstPart from './components/FirstPart';
import Welcome from './components/Welcome';
import InputField from './components/InputField';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstPart />
      <Welcome myName="Stefano" />
      {/* Questo welcome deve salutare stefano */}
      <Welcome myName="Matteo" />
      {/* Questo welcome deve salutare Matteo */}
      <Welcome myName="Rossella" />
      {/* Questo welcome deve salutare Rossella */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <InputField pholder="Scrivimi" />
      <InputField pholder="Riempimi" />
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
      </p>
    </>
  );
}

export default App;
