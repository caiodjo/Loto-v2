import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchPassedGames } from "../../redux/slices/api.slice.sheet";
import { ChangeEvent, FormEvent, useState } from "react";

export function Upload() {
  const dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState<File | null>(null);

  //Primeiro salvar o arquivo que foi alterado no front
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0];
    setFile(selectedFile || null);
  };
  //Ao submeter confirma se há arquivo adicionado e monta o FormData para enviar ao back
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      dispatch(fetchPassedGames(formData));
    }
  };

  return (
    <>
      <Form
        name="file"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Adicione a planilha de jogos: </Form.Label>
          <Form.Control onChange={handleFileChange} type="file" name="file" />
        </Form.Group>
        <Button type="submit">Fazer Upload</Button>
      </Form>

    </>
  );
}
