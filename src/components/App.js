import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";
import Footer from "./Footer";
import Header from "./Header";
//import ItemListContainer from"./ItemListContainer"
//import ItemListContainer from"./ItemListContainer"
import Main from "./Main";

const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Main />
        {/* <ItemListContainer greeting="Hola, que tal?"/> */}
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
};
export default App;

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jorge Arruda | React Js | 43575 | Argentina Tri
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




export default App;*/

//{/*<ItemListContainer greeting = "Hola, que tal?">*/} /linea 11
