import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import { Link } from "react-router-dom";
import axios from "axios";

function Alterar() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tarefas/listar")
      .then((response) => setTarefas(response.data))
      .catch((error) => console.log(error));
  }, []);

  function handleAlterarStatus(tarefaId: string) {
    axios
      .put(`http://localhost:5000/tarefas/alterar/${tarefaId}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>Alteração de Status de Tarefas</h1>
      <Link to="/tarefa/listar">Listar</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Status</th>
            <th>Ação</th>
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
              <td>
                <button onClick={() => handleAlterarStatus(tarefa.tarefaId)}>
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alterar;
