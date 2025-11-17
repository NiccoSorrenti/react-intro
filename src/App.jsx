import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FirstPart from './components/FirstPart';
import Welcome from './components/Welcome';
import InputField from './components/InputField';

// App è un COMPONENTE REACT!
// la forma PIÙ SEMPLICE per un componente REACT è una FUNZIONE
// una funzione che RITORNA del JSX (una sintassi molto simile ad HTML)

// differenze principali tra HTML e JSX:
// - class diventa className
// - in JSX si possono utilizzare dei tag "vuoti" <> </> (chiamati "fragment")

// REGOLA IMPORTANTE: ogni componente React può ritornare UN SINGOLO TAG JSX

const myName = 'Giangiorgio';

const App = function () {
  return (
    // questo è un REACT FRAGMENT
    // un contenitore "virutale" che serve solamente per far contenta
    // la regola JSX che impone che ad ogni espressione si ritorni UN SOLO ELEMENTO
    <>
      <FirstPart />
      <Welcome myName="Stefano" />
      {/* questo Welcome deve salutare Stefano */}
      <Welcome myName="Matteo" />
      {/* questo Welcome deve salutare Matteo */}
      <Welcome myName="Rossella" />
      {/* questo Welcome deve salutare Rossella */}
      <section>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </section>
      <InputField pholder="Scrivimi" />
      <InputField pholder="Riempimi" />
      <h1>Vite + React</h1>
      <h2>Il mio primo componente REACT! Io mi chiamo: {myName}</h2>
      <h3>EPICODE!</h3>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default App;
