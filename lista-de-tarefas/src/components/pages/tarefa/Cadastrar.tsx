import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import { Link } from "react-router-dom";
import axios from "axios";

function Cadastrar() {
  const [tarefa, setTarefa] = useState<Tarefa>({
    tarefaId: "",
    titulo: "",
    descricao: "",
    criadoEm: "",
    categoriaId: "",
    categoriaNome: "",
    status: "",
  });

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categoria/listar")
      .then((response) => setCategorias(response.data))
      .catch((error) => console.log(error));
  }, []);

  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setTarefa({ ...tarefa, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/tarefas/cadastrar", tarefa)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>
      <Link to="/tarefas/listar">Listar</Link>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Titulo</label>
          <input
            type="text"
            name="titulo"
            value={tarefa.titulo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            type="text"
            name="descricao"
            value={tarefa.descricao}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Criado em</label>
          <input
            type="date"
            name="criadoEm"
            value={tarefa.criadoEm}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            name="categoriaId"
            value={tarefa.categoriaId}
            onChange={handleInputChange}
          >
            <option value="">Selecione</option>
            {categorias.map((categoria: any) => (
              <option key={categoria.categoriaId} value={categoria.categoriaId}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastrar;
