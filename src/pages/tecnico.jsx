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
          <a className="botao-wireframe" href="https://www.figma.com/design/poJPUWCnDc9Cu14FtQt4xE/Wireframe---M%C3%A9dia-e-Alta-Fidelidade?node-id=13-2 " target="_blank">Wireframe</a>
          <a className="botao-regrasDeNegocio" href="https://docs.google.com/spreadsheets/d/1MOYsL-Venk8RNgr8zlgpbkRq69sUTT7NGieRT_M7bek/edit?usp=sharing" target="_blank">Regras de Negócio</a>
          <button className="botao-modelagemConsultorio" onClick={() => window.open('/Modelagem consultório médico.pdf', '_blank')}>Modelagem Consultório</button>
          <button className="botao-listaModeloLogico" onClick={() => window.open('/Cópia de Lista Exercícios -Modelo Lógico.pdf', '_blank')}>Lista de Exercícios</button>
          <a className="botao-simuladoSaep" href=" " target="_blank"> Simulado SAEP</a>
          <a className="botao-calculadoraDeHoras" href=" https://github.com/rafadondee/Calculadora " target="_blank"> Calculadora de Horas</a>
          <a className="botao-ApiGithub" href=" https://github.com/rafadondee/API-GITHUB " target="_blank"> API Github</a>

        </div>
    

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1 className='modelagemDeSistemas' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Modelagem de Sistemas</h1  >
      <h2 className='bancoDeDados'> Banco de Dados </h2>
      <h2 className='desenvolvimentoDeSistemas' >Desenvolvimento de Sistemas</h2>
      <h2 className='implantacaoDeSistemas'> Implantação de Sistemas</h2>


      <p className='paragrafo-salaDeAulaInvertida'>Esta atividade do 2° Trimestre <br /> teve como objetivo estudar <br /> um tipo de metodologia <br /> e passar para a turma nossos <br /> conhecimentos adquiridos.  <br />
       Contemplou a H3, H5 e H8. </p>
      <p className='paragrafo-wireframe'>Esta atividade do 1° Trimestre <br /> teve como objetivo fazer<br /> um wireframe de alta fidelidade <br /> da nossa S.A, visando deixar <br /> o projeto da maneira <br /> que tínhamos em mente. <br /> Contemplou a H2, H3, H4 E H5.
   </p>
      <p className='paragrafo-regrasDeNegocio'>Esta atividade do 1° Trimestre <br /> teve como objetivo fazer<br /> algumas regras de negócio <br /> da nossa S.A, visando dar um <br /> norte para o projeto. <br /> Contemplou a H2, H3, H4 e H8    </p>
      <p className='paragrafo-modelagemConsultorio'>Esta atividade do 2° Trimestre <br /> teve como objetivo interpretar <br /> um sistema criado pela professora <br /> sabendo aplicar as ideias de <br /> relacionamentos e entidades <br /> aprendidas em sala. <br /> Contemplou a H1, H2 e H3.
 </p>
 <p className='paragrafo-listaModeloLogico'>Esta atividade do 2° Trimestre <br /> teve como objetivo realizar <br /> uma lista de exercícios do  <br />  modelo lógico, sabendo aplicar <br /> as ideias de relacionamentos <br /> e entidades aprendidas em sala. <br /> Contemplou a H1 e H2.
 </p>
 <p className='paragrafo-simuladoSaep'>Esta atividade do 3° Trimestre <br /> ainda não foi realizada.</p>




</div>
    
  );
}

export default Tecnico;