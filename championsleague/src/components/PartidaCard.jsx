import React from 'react';

const PartidaCard = ({ partida }) => (
  <li>
    <img src={partida.imagem_casa} alt={partida.time_casa} className="time-imagem" />
    {partida.time_casa} {partida.resultado} {partida.time_visitante}
    <img src={partida.imagem_visitante} alt={partida.time_visitante} className="time-imagem" />
  </li>
);

export default PartidaCard;
