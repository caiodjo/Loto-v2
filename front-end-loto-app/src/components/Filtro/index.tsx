import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button } from "react-bootstrap";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { filtrarNumeros } from "../../redux/slices/cartela.slice";
import { padroes } from "../../types/patterns";

interface PropsFilter {
  op: "par" | "impar" | "primo" | "fibo" | "moldura" | "miolo";
}
export default function Filtro(props: PropsFilter) {
  const dispatch = useDispatch();
  const listFilter: number[] = useSelector((state: RootState) => state.filtros);

  //inicializa o array com 25 valores de 01 a 25 em string
  function createFilters() {
    switch (props.op) {
      case "par":
        return padroes.pares.map((val) => val.toString().padStart(2, "0"));
      case "impar":
        return padroes.impares.map((val) => val.toString().padStart(2, "0"));
      case "primo":
        return padroes.primos.map((val) => val.toString().padStart(2, "0"));
      case "fibo":
        return padroes.fibonacci.map((val) => val.toString().padStart(2, "0"));
      case "moldura":
        return padroes.miolo.map((val) => val.toString().padStart(2, "0"));
      case "miolo":
        return padroes.moldura.map((val) => val.toString().padStart(2, "0"));
    }
  }

  const possibilities = createFilters();
  return (
    <>
      <p>filtro: {props.op}</p>
      {possibilities.map((pos, index) => {
        return (
          <Button
            variant="outline-primary"
            key={index}
            active={listFilter.includes(parseInt(pos, 10)) ? true : false}
            onClick={() => {
              dispatch(filtrarNumeros(parseInt(pos, 10)));
            }}
          >
            {pos}
          </Button>
        );
      })}
    </>
  );
}
