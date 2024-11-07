import React from 'react';
import { useNavigate } from 'react-router-dom';

function Linguagens() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='linguagens'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-sobremim" onClick={() => window.open('/quem sou eu.pdf', '_blank')}>Sobre mim</button>
          <button className="botao-past" onClick={() => window.open('/simplepast.jpg', '_blank')}>Simple Past</button>
          <button className="botao-modernismo" onClick={() => window.open('/urupes.pdf', '_blank')}>Pré Modernismo</button>
          <button className="botao-notaRedacao" onClick={() => window.open('/Nota redacao 2 tri.png', '_blank')}>Nota Redação</button>
          <button className="botao-notaRedacao-3tri" onClick={() => window.open('/redacao-3tri.png ', '_blank')}>Redação 3° Tri</button>
          <a className="botao-videoDaily" href="https://www.instagram.com/reel/DAZqDuMO5TZ/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" target="_blank">Vídeo </a>
          <a className="botao-curriculo-atualizado" href="https://www.canva.com/design/DAFEa1Oa7_s/ZTZ8wakyt35EkVzylDMKWw/view?utm_content=DAFEa1Oa7_s&utm_campaign=designshare&utm_medium=link&utm_source=editor " target="_blank">Currículo</a>
         
          
        </div>
      

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1 className='primeiroTrimestreLinguagens' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Primeiro Trimestre</h1  >
      <h2 className='segundoTrimestreLinguagens' >Segundo Trimestre</h2>
      <h2 className='terceiroTrimestreLinguagens' >Terceiro Trimestre</h2>
    

 
  <p className='paragrafo-sobremim'>Esta atividade teve como<br /> objetivo mostrar em um<br /> pequeno texto quem eu sou.<br /> Falei um pouco sobre<br /> meus hobbies, interesses<br /> profissionais e minhas<br /> caracteristícas.<br /> Contemplou a H2, H3 e H5.</p>
  <p className='paragrafo-past'>Esta atividade teve como<br /> objetivo interpretar a<br /> imagem, como se fosse uma<br /> postagem do Instagram.<br /> Abordou a H11, H25, H10 e H24 </p>
  <p className='paragrafo-modernismo'>Esta atividade teve <br /> objetivo interpretar <br />alguma obra dentre<br /> as disponíveis. Nosso<br /> grupo escolheu Urupês<br /> de Monteiro Lobato.<br /> Abordou a H3, H4, H16, H22 e H24 </p>
  <p className='paragrafo-notaRedacao'>Esta avaliação teve como objetivo <br /> criar uma redação sobre a <br /> valorização dos profissionais da <br /> educação básica, apontando<br /> o meu ponto de vista sobre o tema<br /> e estratégias para solucionar o problema.</p>
  <p className='paragrafo-notaRedacao-3tri'>Esta avaliação teve como objetivo <br /> criar uma redação sobre as <br /> medidas para combater a má <br /> alimentação entre os jovens no Brasil, <br /> apontando meu ponto de vista sobre o tema<br /> e estratégias para solucionar o problema.</p>
  <p className='paragrafo-videoDaily'>Esta avaliação teve como objetivo <br /> criar um vídeo no estilo "Daily", <br />mostrando minha rotina e como <br /> concilio 2 esportes, trabalho e estudos. <br />Aproveita que tá lendo isso e <br /> me segue no insta(@rafadondee) <br /> ;)</p>
  <p className='paragrafo-curriculo-atualizado'>Esta avaliação teve como <br /> objetivo remodelar meu currículo, <br /> atualizando-o. Tive a oportunidade <br /> de mostrar as hard skills <br /> que desenvolvi esse ano, <br /> além de treinar meu inglês.</p>
  

    </div>
  );
}

export default Linguagens;