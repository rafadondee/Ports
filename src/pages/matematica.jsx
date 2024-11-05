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
          <button className="botao-quebrandoAbanca" onClick={() => window.open('/_Atividade Quebrando a banca.pdf', '_blank')}>Filme</button>
          <a class="botao-floripoly" href="https://www.canva.com/design/DAGKXyhmOQE/6n7H74scpfzC2d1tA-BmIA/view?utm_content=DAGKXyhmOQE&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">Floripoly</a>


        </div>
      
      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h2 className='primeiroTrimestreMtm' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Primeiro Trimestre</h2>
      <h2 className='segundoTrimestreMtm' >Segundo Trimestre</h2>
    
      <p className='paragrafo-av1Mtm'>Essa atividade foi feita com o objetivo<br />  de compreender melhor o uso de ângulos<br />  e arcos em situações cotidianas.<br /> Envolveu as habilidades H5 e H6.</p>
      <iframe className= 'video-gabigol' src="https://www.youtube.com/embed/L0DyD08ygEs" allow="autoplay"></iframe>
      <p className='paragrafo-quebrandoAbanca'>Essa atividade foi feita com o objetivo <br /> de identificar em diferentes áreas científicas <br /> e outras atividades práticas modelos e<br /> problemas que fazem uso de<br /> estatísticas e probabilidades.<br /> Envolveu as habilidades H31 e H32.</p>
      <p className='paragrafo-floripoly'>Essa atividade foi feita com o objetivo <br /> de  identificar dados, regularidades <br /> e relações numa situação <br /> que envolva o  raciocínio combinatório, <br /> utilizando os processos de contagem.<br /> Envolveu as habilidades H30, H31 e H32.</p>
    </div>
  );
}

export default Matematica;
