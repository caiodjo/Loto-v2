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
      <div className="row m-3">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-5">
              <Filtro op="par" />
            </div>
            <div className="col-sm-5">
              <Filtro op="impar" />
            </div>
            <div className="col-sm-5">
              <Filtro op="fibo" />
            </div>

            <div className="col-sm-5">
              <Filtro op="primo" />
            </div>
            <div className="col-sm-5">
              <Filtro op="miolo" />
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <h2>Filtrar: </h2>
          <Generate />
        </div>
      </div>
    </>
  );
}

export default App;
