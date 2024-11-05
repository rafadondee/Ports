import React from 'react';
import { useNavigate } from 'react-router-dom';

function Humanas() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className='humanas'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <button className="botao-1917" onClick={() => window.open('/Filme 1917 - Análise.pdf', '_blank')}>Filme 1917</button>
          <button className="botao-paises" onClick={() => window.open('/Atividade - Países.pdf', '_blank')}>Atividade sobre Países</button>
          <button className="botao-imperialismo" onClick={() => window.open('/Imperialismo.pdf', '_blank')}>Imperialismo</button>
          <a className="botao-totalitarismo" href="https://www.canva.com/design/DAGHFJuHHJo/b5Fr0tFcWMXuRGNo8XpJlg/view?utm_content=DAGHFJuHHJo&utm_campaign=designshare&utm_medium=link&utm_source=editor " target="_blank">Totalitarismo</a>
          <a className="botao-urbanismo" href=" https://www.canva.com/design/DAGGa44sWxw/lx002sv1YjdalGuGncVoug/view?utm_content=DAGGa44sWxw&utm_campaign=designshare&utm_medium=link&utm_source=editor#1 " target="_blank">Urbanismo</a>
  
        </div>
       

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1 className='primeiroTrimestreHumanas' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Primeiro Trimestre</h1  >
      <h2 className='segundoTrimestreHumanas' >Segundo Trimestre</h2>
    

<p className='paragrafo-1917'>Esta atividade teve como<br /> objetivo responder alguns<br /> tópicos sobre o filme 1917 <br /> e a 1° Guerra Mundial.<br /> Contemplou a H15 e H16. </p>
<p className='paragrafo-paises'>Esta atividade teve como<br /> objetivo criar uma apresentação<br /> sobre algum país para que<br /> pudessem haver comparações<br /> depois. Trabalhou a H8, H10 e H12.</p>
<p className='paragrafo-imperialismo'>Esta atividade teve como<br /> objetivo compreender o processo<br /> de partilha do continente<br /> africano e suas consequências<br /> para as nações envolvidas.<br /> Envolveu a H39.</p>
<p className='paragrafo-totalitarismo'>Esta atividade teve como<br /> objetivo achar ações que são de <br /> um sistema totalitário, dentro de<br /> um filme. Nos ajudou a entender<br /> semelhanças entre esse tipo de<br /> governo e o filme "Vida de Inseto". <br />Envolveu a H10 e H39</p>
<p className='paragrafo-urbanismo'>Esta atividade teve como objetivo <br /> escolher cinco imagens que juntas,<br /> seriam capazes de contar características<br /> do começo do século XX.<br /> Escolhemos fotos do Nilo Peçanha.<br /> Foi um trabalho muito divertido e<br /> que nos deu a oportunidade de usar<br /> toda nosssa criatividade. <br /> Envolveu a H22 e H24.</p>

    </div>
  );
}

export default Humanas;