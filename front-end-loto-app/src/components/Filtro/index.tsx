import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button } from "react-bootstrap";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { filtrarNumeros } from "../../redux/slices/cartela.slice";

export default function Filtro() {
  const dispatch = useDispatch();
  const listFilter: number[] = useSelector((state: RootState) => state.filtros);
  const possibilities = Array.from({ length: 25 }, (_, index) => (index + 1).toString().padStart(2, '0'));
  return (
    <>
      {possibilities.map((pos, index) => {
        return (
          <Button
            variant="outline-primary"
            key={index}
            active={listFilter.includes(index+1)? true: false}
            onClick={() => {
              dispatch(filtrarNumeros(parseInt(pos,10)));
            }}
          >
            {pos}
          </Button>
        );
      })}
    </>
  );
}
