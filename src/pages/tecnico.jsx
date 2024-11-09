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
          <button className="botao-normalizacaoDeDados" onClick={() => window.open('/.pdf', '_blank')}>Normalização de Dados</button>
          <a className="botao-calculadoraDeHoras" href=" https://github.com/rafadondee/Calculadora " target="_blank"> Calculadora de Horas</a>
          <a className="botao-apiGithub" href=" https://github.com/rafadondee/API-GITHUB " target="_blank"> API Github</a>
          <button className="botao-trabalhoApi" onClick={() => window.open('/API Trabalho.pdf', '_blank')}>Trabalho API</button>
          <a className="botao-projetoBiblioteca" href=" https://github.com/rafadondee/biblio-front " target="_blank"> Projeto Biblioteca</a>
          <button className="botao-sistemaCms" onClick={() => window.open('/Cópia de Cenario_1 - Atividade 1.pdf', '_blank')}>Sistema CMS</button>
          <button className="botao-bibliotecaBanco" onClick={() => window.open('/Bancodedados_Biblioteca.pdf', '_blank')}>Biblioteca - Modelo Físico</button>
          <button className="botao-join" onClick={() => window.open('/Teste inner join.sql', '_blank')}>Left e Right Join</button>
          <a className="botao-express" href="https://github.com/rafadondee/Express-Teste" target="_blank"> Express</a>
          <a className="botao-tarefa02" href="https://github.com/rafadondee/Tarefa-02" target="_blank"> Tarefa 02</a>
          <a className="botao-apiPaysandu" href="https://www.canva.com/design/DAGV55znpDE/Iql2JZEF7PULE4v3ITbtqQ/view?utm_content=DAGV55znpDE&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"> Testes Atividades</a>


        </div>
    

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1 className='modelagemDeSistemas' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Modelagem de Sistemas</h1  >
      <h2 className='bancoDeDados'> Banco de Dados </h2>
      <h2 className='desenvolvimentoDeSistemas' >Desenvolvimento de Sistemas</h2>
      <h2 className='implantacaoDeSistemas'> Implantação de Sistemas</h2>
      <h2 className='programacaoDeApps'> Programação de Apps</h2>
      <h2 className='testesDeSistemas'> Testes de Sistemas</h2>


      <p className='paragrafo-salaDeAulaInvertida'>Esta atividade do 2° Trimestre <br /> teve como objetivo estudar <br /> um tipo de metodologia <br /> e passar para a turma nossos <br /> conhecimentos adquiridos.  <br />
       Contemplou a H3, H5 e H8. </p>
      <p className='paragrafo-wireframe'>Esta atividade do 1° Trimestre <br /> teve como objetivo fazer<br /> um wireframe de alta fidelidade <br /> da nossa S.A, visando deixar <br /> o projeto da maneira <br /> que tínhamos em mente. <br /> Contemplou a H2, H3, H4 E H5.
   </p>
      <p className='paragrafo-regrasDeNegocio'>Esta atividade do 1° Trimestre <br /> teve como objetivo fazer<br /> algumas regras de negócio <br /> da nossa S.A, visando dar um <br /> norte para o projeto. <br /> Contemplou a H2, H3, H4 e H8    </p>
      <p className='paragrafo-modelagemConsultorio'>Esta atividade do 2° Trimestre <br /> teve como objetivo interpretar <br /> um sistema criado pela professora <br /> sabendo aplicar as ideias de <br /> relacionamentos e entidades <br /> aprendidas em sala. <br /> Contemplou a H1, H2 e H3.
 </p>
 <p className='paragrafo-listaModeloLogico'>Esta atividade do 2° Trimestre <br /> teve como objetivo realizar <br /> uma lista de exercícios do  <br />  modelo lógico, sabendo aplicar <br /> as ideias de relacionamentos <br /> e entidades aprendidas em sala. <br /> Contemplou a H1 e H2.
 </p>
 <p className='paragrafo-normalizacaoDeDados'>Esta atividade do 2° Trimestre <br />  teve como objetivo responder <br /> uma lista com perguntas <br /> sobre normalização de dados, <br /> explicando seus conceitos <br /> e citando exemplos. <br /> Contemplou a H3. </p>
 <p className='paragrafo-bibliotecaBanco'>Esta atividade do 3° Trimestre <br /> teve como objetivo realizar <br /> uma lista de exercícios do  <br />  modelo físico, sabendo aplicar <br /> as ideias de relacionamentos <br /> e entidades aprendidas em sala. <br /> Contemplou a H4.</p>
 <p className='paragrafo-join'>Esta atividade do 3° Trimestre <br /> teve como objetivo realizar <br/> a criação de tabelas utilizando os <br /> mecanismos de seleção Left e Right Join. <br />Contemplou a H4 e H5. </p>
 
 <p className='paragrafo-express'>Esta atividade do 3° Trimestre <br /> teve como objetivo realizar <br/> a criação de um sistema <br /> usando o express, um popular <br /> framework web estruturado. </p>
 <p className='paragrafo-tarefa02'>Esta atividade do 3° Trimestre <br /> teve como objetivo realizar <br/> a criação usando o chalk, <br /> buscando retornar no terminal <br /> o script perguntando o nome  <br />e idade do usuário. <br /> </p>

 
 <p className='paragrafo-apiPaysandu'>Esta atividade do 3° Trimestre <br /> teve como objetivo realizar <br/> uma apresentação que resumia, <br /> todo o conhecimento  <br /> realizado durante esse <br /> período. Abordou diversos <br /> tipos de testes de sistemas.</p>


 <p className='paragrafo-calculadoraDeHoras '>Esta atividade do 1° Trimestre <br />  teve como objetivo criar <br /> uma calculadora de horas, <br /> ou seja, um sistema que <br /> realizasse cálculos das <br /> horas e minutos. </p>
 <p className='paragrafo-apiGithub' >Esta atividade do 1° Trimestre <br />  teve como objetivo criar <br /> uma API contendo hyperlinks <br /> que levassem para páginas <br /> do nosso próprio Github. <br /> Contemplou a H3, H4, H5, <br /> H6, H9 e H10. </p>
 <p className='paragrafo-trabalhoApi '>Esta atividade do 1° Trimestre <br />  teve como objetivo apresentar <br /> algumas das principais <br /> carcaterísticas de uma API <br /> explicando seus conceitos <br /> e citando exemplos. <br /> Contemplou a H3, H4, H5, <br /> H6, H9 e H10.  </p>
 <p className='paragrafo-projetoBiblioteca'>Esta atividade do 2° Trimestre <br />  teve como objetivo criar <br /> um sistema bibliotecário <br /> que permitisse o cadastro  <br /> ou devolução de livros. <br /> Fizemos funções para a <br /> bibliotecária e para<br />o estudante.<br /> </p>


 <p className='paragrafo-sistemaCms'>Esta atividade do 1° Trimestre <br />  teve como objetivo encontrar <br /> uma série de imformações <br /> em um site e registrar o que  <br /> foi encontrado em um documento. </p>




</div>
    
  );
}

export default Tecnico;