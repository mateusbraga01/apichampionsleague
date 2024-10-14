import React, { useState, useEffect } from 'react';
import './App.css';
import GrupoCard from './components/GrupoCard';
import PartidaCard from './components/PartidaCard';

const App = () => {
  const [tab, setTab] = useState(0);
  const [grupos, setGrupos] = useState([]);
  const [oitavas, setOitavas] = useState([]);
  const [quartas, setQuartas] = useState([]);
  const [semifinais, setSemifinais] = useState([]);
  const [final, setFinal] = useState([]);

  useEffect(() => {
    fetch('/classificacao_grupos.json')
      .then(response => response.json())
      .then(data => setGrupos(data.grupos));

    fetch('/oitavas.json')
      .then(response => response.json())
      .then(data => setOitavas(data.oitavas));

    fetch('/quartas.json')
      .then(response => response.json())
      .then(data => setQuartas(data.quartas));

    fetch('/semifinais.json')
      .then(response => response.json())
      .then(data => setSemifinais(data.semifinais));

    fetch('/finais.json')
      .then(response => response.json())
      .then(data => setFinal(data.final));
  }, []);

  const handleTabClick = (index) => {
    setTab(index);
  };

  return (
    <div className="App">
      <h1>Liga dos Campeões</h1>
      
      <div className="abas">
        <button className={`aba ${tab === 0 ? 'ativa' : ''}`} onClick={() => handleTabClick(0)}>Todas as Equipes</button>
        <button className={`aba ${tab === 1 ? 'ativa' : ''}`} onClick={() => handleTabClick(1)}>Fase de Grupos</button>
        <button className={`aba ${tab === 2 ? 'ativa' : ''}`} onClick={() => handleTabClick(2)}>Oitavas de Final</button>
        <button className={`aba ${tab === 3 ? 'ativa' : ''}`} onClick={() => handleTabClick(3)}>Quartas de Final</button>
        <button className={`aba ${tab === 4 ? 'ativa' : ''}`} onClick={() => handleTabClick(4)}>Semifinais</button>
        <button className={`aba ${tab === 5 ? 'ativa' : ''}`} onClick={() => handleTabClick(5)}>Final</button>
      </div>

      <div className="conteudo">
        <div style={{ display: tab === 0 ? 'block' : 'none' }}>
          <h2>Todas as Equipes</h2>
          <ul>
            {grupos.map((grupo, index) => (
              <li key={index}>
                {grupo.classificacao.map(time => (
                  <div key={time.time}>
                    {time.imagem && <img src={time.imagem} alt={time.time} className="time-imagem" />}
                    {time.time}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: tab === 1 ? 'block' : 'none' }}>
          <h2>Fase de Grupos</h2>
          {grupos.map((grupo, index) => (
            <GrupoCard key={index} grupo={grupo} />
          ))}
        </div>

        <div style={{ display: tab === 2 ? 'block' : 'none' }}>
          <h2>Oitavas de Final</h2>
          <ul>
            {oitavas.map((partida, index) => (
              <PartidaCard key={index} partida={partida} />
            ))}
          </ul>
        </div>

        <div style={{ display: tab === 3 ? 'block' : 'none' }}>
          <h2>Quartas de Final</h2>
          <ul>
            {quartas.map((partida, index) => (
              <PartidaCard key={index} partida={partida} />
            ))}
          </ul>
        </div>

        <div style={{ display: tab === 4 ? 'block' : 'none' }}>
          <h2>Semifinais</h2>
          <ul>
            {semifinais.map((partida, index) => (
              <PartidaCard key={index} partida={partida} />
            ))}
          </ul> 
        </div>

        <div style={{ display: tab === 5 ? 'block' : 'none' }}>
          <h2>Final</h2>
          <ul>
            {final.map((partida, index) => (
              <PartidaCard key={index} partida={partida} />
            ))}
          </ul>
        </div>
      </div>  
    </div>
  );
};

export default App;
