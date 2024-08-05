import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tecnico() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='tecnico'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-salaDeAulaInvertida" onClick={() => window.open('/Sala de aula invertida.pdf', '_blank')}>Metodologia Scrum</button>
          <a class="botao-wireframe" href="https://www.figma.com/design/poJPUWCnDc9Cu14FtQt4xE/Wireframe---M%C3%A9dia-e-Alta-Fidelidade?node-id=13-2 " target="_blank">Wireframe</a>
          <a class="botao-regrasDeNegocio" href="https://docs.google.com/spreadsheets/d/1MOYsL-Venk8RNgr8zlgpbkRq69sUTT7NGieRT_M7bek/edit?usp=sharing" target="_blank">Regras de Negócio</a>
          <button className="botao-modelagemConsultorio" onClick={() => window.open('/Modelagem consultório médico.pdf', '_blank')}>Modelagem Consultório</button>

        </div>
    

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1 className='modelagemDeSistemas' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Modelagem de Sistemas</h1  >
      <h2 className='bancoDeDados'> Banco de Dados </h2>
      <h2 className='desenvolvimentoDeSistemas' >Desenvolvimento de Sistemas</h2>
      <h2 className='implantacaoDeSistemas'> Implantação de Sistemas</h2>


      <p className='paragrafo-salaDeAulaInvertida'>Esta atividade do 2° Trimestre <br /> teve como objetivo estudar <br /> um tipo de metodologia <br /> e passar para a turma nossos <br /> conhecimentos adquiridos.  <br />
       Contemplou a H3, H5 e H8. </p>
      <p className='paragrafo-wireframe'>Esta atividade do 1° Trimestre <br /> teve como objetivo fazer<br /> algumas regras de negócio <br /> da nossa S.A, visando dar um <br /> norte para o projeto. <br /> Contemplou a H2, H3, H4 e H8   </p>
      <p className='paragrafo-regrasDeNegocio'>Esta atividade teve como<br /> objetivo   </p>
      <p className='paragrafo-modelagemConsultorio'>Esta atividade teve como<br /> objetivo <br />  </p>




</div>
    
  );
}

export default Tecnico;