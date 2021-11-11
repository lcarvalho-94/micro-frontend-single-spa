import React from "react";
import "./style.css"

export default function Root(props) {
  return (
    <div className="App">
      <header>
          <a href="/">logo</a>
          <input type="text" placeholder="Buscar aulas" />
      </header>
      <aside>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="study-plan">Plano de estudos</a>
          </li>
          <li>
            <a href="ao-vivo">Ao vivo</a>
          </li>
        </ul>
      </aside>
        <div className="container">
           <div className="first-page-container">
            <h2>Atividade da semana</h2>
            <a href="https://waf-stag.descomplica.com.br/cursos/descomplica-top-turma-de-abril-2021/redacao/tema/app/4942/">
                <div className="card">
                    <h3>Redação semanal</h3>
                    <span>Escreva sua redação sobre o tema "Como interferir positivamente para combater a persistência da cultura de queimadas no Brasil?"</span>
                </div>
            </a>
        </div>
        </div>
    </div>
  );
}