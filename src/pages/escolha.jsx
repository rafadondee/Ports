import React from 'react';
import { useNavigate } from 'react-router-dom';

function Escolha() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='escolha'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-naturezaElotromagnetismo" onClick={() => window.open('/Eletromagnetismo.pdf', '_blank')}>Eletromagnetismo</button>
         

        </div>
    

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
     <h1 className='primeiroTrimestreHumanas' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Primeiro Trimestre</h1  >
      <h2 className='segundoTrimestreHumanas' >Segundo Trimestre</h2>

     <p className='paragrafo-naturezaEletromagnetismo'>Essa atividade de Ciências da Natureza<br /> teve como objetivo a criação de um<br /> cartaz explicando o magnetismo solar,<br /> terrestre e como e por quê<br /> acontecem as auroras polares.<br />
Contemplou a habilidade H36. </p>

    </div>
  );
}

export default Escolha;