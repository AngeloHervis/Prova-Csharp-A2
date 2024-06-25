import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import { Link } from "react-router-dom";
import axios from "axios";

function ListarNaoConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tarefas/naoconcluidas")
      .then((response) => setTarefas(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Listagem de Tarefas Não Concluídas</h1>
      <Link to="/tarefa/listar">Listar</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.categoriaNome}</td>
              <td>{tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarNaoConcluidas;
