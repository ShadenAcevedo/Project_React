import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importo los componentes
import FirstComponent from './components/FirsComponent';

function Mensaje(nombre, edad){
  var presentacion = 
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  return presentacion;
}

function App() {
  var nombre = "Shaden Acevedo";
  
  return (
    <div className="App" >
      <header className="App-header" >
        <img src={logo}
          className="App-logo"
          alt="logo" />
        <p>Edit <code> src / App.js </code> and save to reload. 
        </p> 

        {/*Se está llamando una función externa*/}
        {Mensaje(nombre, 21)}

        {/*Se crea una alerta dentro del componente*/}
        { alert("Alerta desde el componente App de react") }

        <a className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer" >
              Learn React 
        </a> 
      </header> 

      <section className="componentes">
        <FirstComponent/>
      </section>
    </div>
    );
}

export default App;