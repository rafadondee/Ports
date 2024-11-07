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
          <a className="botao-novaCapital" href="https://www.canva.com/design/DAGS4_We70M/9wJqiAhlFGYssSLZEn0iOA/view?utm_content=DAGS4_We70M&utm_campaign=designshare&utm_medium=link&utm_source=editor#6" target="_blank">Nova Capital</a>
          <a className="botao-coldWar" href="https://www.canva.com/design/DAGSO2i6Dj8/KC_Xq5lcHSBz-gh_fJygdg/view?utm_content=DAGSO2i6Dj8&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">Cold War </a>


        </div>
       

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h1 className='primeiroTrimestreHumanas' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Primeiro Trimestre</h1  >
      <h2 className='segundoTrimestreHumanas' >Segundo Trimestre</h2>
      <h2 className='terceiroTrimestreHumanas' >Terceiro Trimestre</h2>
    
    

<p className='paragrafo-1917'>Esta atividade teve como<br /> objetivo responder alguns<br /> tópicos sobre o filme 1917 <br /> e a 1° Guerra Mundial.<br /> Contemplou a H15 e H16. </p>
<p className='paragrafo-paises'>Esta atividade teve como<br /> objetivo criar uma apresentação<br /> sobre algum país para que<br /> pudessem haver comparações<br /> depois. Trabalhou a H8, H10 e H12.</p>
<p className='paragrafo-imperialismo'>Esta atividade teve como<br /> objetivo compreender o processo<br /> de partilha do continente<br /> africano e suas consequências<br /> para as nações envolvidas.<br /> Envolveu a H39.</p>
<p className='paragrafo-totalitarismo'>Esta atividade teve como<br /> objetivo achar ações que são de <br /> um sistema totalitário, dentro de<br /> um filme. Nos ajudou a entender<br /> semelhanças entre esse tipo de<br /> governo e o filme "Vida de Inseto". <br />Envolveu a H10 e H39</p>
<p className='paragrafo-urbanismo'>Esta atividade teve como objetivo <br /> escolher cinco imagens que juntas,<br /> seriam capazes de contar características<br /> do começo do século XX.<br /> Escolhemos fotos do Nilo Peçanha.<br /> Foi um trabalho muito divertido e<br /> que nos deu a oportunidade de usar<br /> toda nosssa criatividade. <br /> Envolveu a H22 e H24.</p>
<p className='paragrafo-novaCapital'>Esta atividade teve como objetivo <br /> criar uma nova capital brasileira,<br /> elencando suas principais <br />características, como: nome, <br /> economia e planta baixa do território. <br /> Foi uma atividade muito interressante,<br /> pois nos permitiu elaborar soluções <br /> para os problemas que apareceram <br /> no caminho. Colocamos nossa <br /> criatividade  à prova <br /> para pensar nos detalhes. <br /> Envolveu a H10, H34, H35 e H39.</p>
<p className='paragrafo-coldWar'>Esta atividade teve como objetivo <br /> escolher 2 personagens, fotos, <br /> prédios e gráficos. Um que representasse <br /> o lado norte americano e outro que <br /> representasse o lado soviético, <br /> durante a Guerra Fria.<br /> Foi um trabalho que além de ser divertido, <br /> nos permitiu na prática, aprender um pouco <br /> mais sobre essa época. <br /> Envolveu a H28, H30, H32, H39 e H40.</p>


    </div>
  );
}

export default Humanas;