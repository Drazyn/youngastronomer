import React from 'react';
import './App.css';

var pageContent = () => {
    return (
      <div>
        <h1>Study guide</h1>
        <h2>OBA - Level 4</h2>
        Practice your skills with past papers.
        <h2>Seletiva Online</h2>
        Practice your skills with past papers.
        <h2>Barra do Pirai</h2>
        Practice your skills with past papers.
        <h2>Treinamento em Vinhedo</h2>
        Practice your skills with past papers.
        <h2>Internacionais</h2>
        Practice your skills with past papers.
      </div>
    );
};

function App() {
  return (
    <div className="App">
      <div className="insideBox">
          <header>
            Young Astronomer Header
          </header>
          <div>
              {pageContent()}
          </div>
      </div>

      <footer>
        Nao sabemos nada sobre licenca, vamos pesquisar!
      </footer>

    </div>
  );
}

export default App;
