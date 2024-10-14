import React from 'react';

const GrupoCard = ({ grupo }) => (
  <div>
    <h3>{grupo.nome}</h3>
    <ul>
      {grupo.classificacao.map(time => (
        <li key={time.time}>
          {time.imagem && <img src={time.imagem} alt={time.time} className="time-imagem" />}
          {time.time} - {time.pontos} pontos
        </li>
      ))}
    </ul>
  </div>
);

export default GrupoCard;
