import "./App.css";
import Filtro from "./components/Filtro";
import Generate from "./components/Generate";
import { Upload } from "./components/Upload";

function App() {
  return (
    <>
      <div>
        <Upload />
      </div>
      <Filtro op="par" />
      <Filtro op="impar" />
      <Filtro op="fibo" />
      <Filtro op="primo" />
      <Filtro op="miolo" />

      <h2>Filtrar: </h2>
      <Generate />
    </>
  );
}

export default App;
