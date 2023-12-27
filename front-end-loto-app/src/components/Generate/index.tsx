import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchQnt } from "../../redux/slices/api.slice.filter";
import { useEffect } from "react";

export default function Generate() {
  const loading = useSelector((state: RootState) => state.apiFilter.loading);
  const quantity = useSelector((state: RootState) => state.apiFilter.quantity);
  const listToFilter = useSelector((state: RootState) => state.cartela.filtros);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQnt([2, 3]));
  }, []);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          A quantidade de cartelas disponiveis é: {quantity ? quantity : "0"}
        </div>
      )}
      <Button
        onClick={() => {
          console.log(listToFilter);
          dispatch(fetchQnt(listToFilter));
        }}
      >
        Verificar Quantidade
      </Button>
    </>
  );
}
