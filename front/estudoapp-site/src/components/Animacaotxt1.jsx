import React from 'react';
import ReactTyped from 'react-typed';
import sateliteImg from '../img/satelite.png';

function Animacaotxt1() {
  const texto = "INTERNET CARIOCA: RÁPIDA, ACESSÍVEL E SEGURA:";
  return (
    <div className='containerAnimacaotxt1'>
      <h1>
        <ReactTyped
          strings={[texto]}
          typeSpeed={60}
        />
      </h1>
      <h2>
        Conexão disponível em toda cidade do Rio de Janeiro
      </h2>
      <ul>
        <li>Parceria entre Internet Carioca, Prefeitura e Starlink</li>
        <li>Estrutura de internet formada por satélite e antenas.</li>
        <li>Disponível em toda cidade, seja área urbana, rural ou favela</li>
        <li>Conexão é gratuita em locais públicos como praças, museus, escolas e hospitais;</li>
        <li>Gratuíto para estudantes da rede pública e cariocas de baixa renda;</li>
        <li>Planos exclusivos para empresas privadas e terceiro setor;</li>
        <li>Estrutura colaborativa - cada usuário que contratante contribui para uma conexão mais forte e abrangente em toda a área;</li>
        <li>Tudo isso visando democratizar o acesso à internet e proporcionar uma conexão de qualidade para todos os cidadãos;</li>
      </ul>
    </div>
  );
}

function ImgParaGrid() {
  return (
    <img className='imgSatelite' src={sateliteImg} alt="Satélite" />
  );
}

export { Animacaotxt1, ImgParaGrid };