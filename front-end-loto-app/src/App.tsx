import { useState } from "react";
import "./App.css";
import Filtro from "./components/Filtro";

function App() {
  const [count, setCount] = useState(0);

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
