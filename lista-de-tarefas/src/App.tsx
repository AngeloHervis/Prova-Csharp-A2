import React from "react";
import Listar from "./components/pages/tarefa/Listar";
import ListarConcluidas from "./components/pages/tarefa/ListarConcluidas";
import ListarNaoConcluidas from "./components/pages/tarefa/ListarNaoConcluidas";
import Alterar from "./components/pages/tarefa/Alterar";
import Cadastrar from "./components/pages/tarefa/Cadastrar";
import CadastrarCategoria from "./components/pages/categoria/CadastrarCategoria";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/tarefa/listar">Listar</Link>
            </li>
            <li>
              <Link to="/tarefa/listar/concluidas">Listar Concluídas</Link>
            </li>
            <li>
              <Link to="/tarefa/listar/naoconcluidas">
                Listar Não Concluídas
              </Link>
            </li>
            <li>
              <Link to="/tarefa/alterar">Alterar</Link>
            </li>
            <li>
              <Link to="/tarefa/cadastrar">Cadastrar</Link>
            </li>
            <li>
              <Link to="/categoria/cadastrar">Cadastrar Categoria</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tarefa/listar" element={<Listar />} />
          <Route
            path="/tarefa/listar/concluidas"
            element={<ListarConcluidas />}
          />
          <Route
            path="/tarefa/listar/naoconcluidas"
            element={<ListarNaoConcluidas />}
          />
          <Route path="/tarefa/alterar" element={<Alterar />} />
          <Route path="/tarefa/cadastrar" element={<Cadastrar />} />
          <Route path="/categoria/cadastrar" element={<CadastrarCategoria />} />
        </Routes>
        <footer>
          <p>Desenvolvido por Ângelo Hervis</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
