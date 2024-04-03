import React from 'react';
import { useNavigate } from 'react-router-dom';

function Matematica() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='matematica'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-arcosEangulos" onClick={() => window.open('/Av1 matemática - história .pdf', '_blank')}>AV 1</button>

        </div>
        <a href="/segundo.pdf" target="_blank" rel="noopener noreferrer">AV 1</a>
      
      </header>
      <a className="titulo-header" href='/'>Rafa</a>
     <h1>Clique aqui para acessar a <br /> primeira avaliação de matemática!</h1> 
     <div class="loader">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>  
<p className='paragrafo-av1Mtm'>Essa atividade foi feita com o objetivo<br />  de compreender melhor o uso de ângulos<br />  e arcos em situações cotidianas.<br /> Envolveu as habilidades H5 e H6.</p>
    </div>
  );
}

export default Matematica;