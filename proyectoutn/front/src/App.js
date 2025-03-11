import Header
 from "./components/layout/Header";

import Nav from "./components/layout/Nav";
// import logo from './logo.svg';
// import './App.css';

import './styles/layout.css';
import './styles/contacto.css';
// import './styles/galeria.css';
import './styles/home.css';
import './styles/nosotros.css';
import './styles/servicios.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
