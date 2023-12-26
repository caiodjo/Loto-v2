import "./App.css";
import Filtro from "./components/Filtro";

function App() {

  return (
    <>

      <Filtro op="par"/>
      <Filtro op="impar"/>
      <Filtro op="fibo"/>
      <Filtro op="primo"/>
      <Filtro op="miolo"/>
    </>
  );
}

export default App;
