import React from 'react';
import { useNavigate } from 'react-router-dom';

function Natureza() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='natureza'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-organica" onClick={() => window.open('/Revisão orgânica.pdf', '_blank')}>Revisão Orgânica</button>
          <button className="botao-evolucionismo" onClick={() => window.open('/evolucionismo.jpg', '_blank')}>Meme Evolucionismo</button>
          <button className="botao-circuitos" onClick={() => window.open('/Circuitos.pdf', '_blank')}>Relatório Circuitos</button>
          <a class="botao-mapaMentalCircuitos" href="https://www.mindmeister.com/app/map/3274692308?t=sYZXPLpyuc" target="_blank">Mapa Mental Circuitos</a>
          <button className="botao-plastico" onClick={() => window.open('/Cartaz-polímeros.pdf', '_blank')}>Uso do plástico</button>
         
        </div>
   

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1 className='primeiroTrimestreNatureza' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Primeiro Trimestre</h1  >
      <h2 className='segundoTrimestreNatureza' >Segundo Trimestre</h2>
    
<p className='paragrafo-organica'>Esta atividade teve como<br /> objetivo responder 6<br /> tópicos sobre Orgânica.<br /> Contemplou as H3, H4 e H5. </p>
<p className='paragrafo-evolucionismo'>Esta atividade teve como<br /> objetivo criar um meme<br /> sobre evolucionismo.<br /> Trabalhou a habilidade H11.</p>
<p className='paragrafo-circuitos'>Esta atividade teve como<br /> objetivo responder algumas<br /> perguntas, sendo a entrega<br /> final um relatório sobre os<br /> circuitos estudados.</p>
<p className='paragrafo-mapaMentalCircuitos'>Esta atividade teve como<br /> objetivo criar um mapa mental<br /> que explicasse os principais<br /> componentes dos circuitos.<br /> Contemplou a habilidade H35.</p>
<p className='paragrafo-plastico'>Esta atividade teve como<br /> objetivo criar um cartaz<br /> que ajudasse de alguma forma<br /> a reduzir o uso de copos<br /> Contemplou as<br />  habilidades H15 e H18.</p>
    </div>
  );
}

export default Natureza;