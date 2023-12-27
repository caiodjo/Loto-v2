import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchPassedGames } from "../../redux/slices/api.slice.sheet";
import { ChangeEvent, FormEvent, useState } from "react";

export function Upload() {
  const dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("mudou");
    console.log(e.target.files![0]);
    const selectedFile = e.target.files![0];
    setFile(selectedFile || null);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Verifique se um arquivo foi selecionado antes de chamar a ação
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // Chame a ação com o arquivo como argumento
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
          <Form.Label>Default file input example</Form.Label>
          <Form.Control onChange={handleFileChange} type="file" name="file" />
        </Form.Group>
        <Button type="submit">Fazer Upload</Button>
      </Form>
      <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="file"/>
        <input type="submit" value="Enviar" />
      </form>

      <h1>Vasco</h1>
      <form action="http:localhost:7777/cartela/build" method="post">
        <input type="text" id="games" name="games" />
        <input type="submit" value="Baixar" />
      </form>
      <a href="/http:localhost:7777/cartela/upload" download="excelBuid.xlsx">
        Baixar Arquivo
      </a>
    </>
  );
}
