import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchQnt, generateResult } from "../../redux/slices/api.slice.filter";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function Generate() {
  const loading = useSelector((state: RootState) => state.apiFilter.loading);
  const quantity = useSelector((state: RootState) => state.apiFilter.quantity);
  const listToFilter = useSelector((state: RootState) => state.cartela.filtros);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQnt([]));
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          A quantidade de cartelas possiveis é:{" "}
          <p>{quantity ? quantity : "0"}</p>
          <Button
            onClick={() => {
              console.log(listToFilter);
              dispatch(fetchQnt(listToFilter));
            }}
          >
            Verificar Quantidade
          </Button>
          <br />
          <div className="m-3">
            <Button
            disabled={true}
              onClick={() => {
                dispatch(
                  generateResult([
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16],
                  ])
                );
              }}
            >
              Baixar planilha
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
