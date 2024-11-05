import React from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Introducao() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='introducao'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
        </div>
      </header>
      <a className="titulo-header" href='/'>Rafa</a> 

      <h1 style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }}>Sobre</h1>
      <h2 className='rotina-h1'>Rotina</h2>
      <p className='titulo1'>Portfólios</p>
      <div className='container3'>
      </div>

      <Slider  className='carrossel'{...settings}>
        <div >
          <a href="https://www.canva.com/design/DAFEy9aRwGA/jBesSjfrLWaRrzFofmUxng/view?utm_content=DAFEy9aRwGA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-1-circle" viewBox="0 0 16 16">
  <path className='path-port1'  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
</svg>
          </a>
        </div>
        <div>
          <a href="https://www.canva.com/design/DAFcW4o8Mf4/OzGQ_VbkgJVOxjTIleOUjQ/view?utm_content=DAFcW4o8Mf4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
          <svg className= "svg-port2 "xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
</svg>
          </a>
        </div>
      </Slider>

 

       <div className='container'></div>
      <p className='sobre'>
        Me chamo Rafael Cardoso Dondé, estou no 3° ano do ensino médio e tenho 17 anos. Sou nascido e criado em Florianópolis, Santa Catarina. Trabalho na Softplan como jovem aprendiz no cargo de Designer Gráfico, estou amando a experiência. 
        Gosto muito de jogar vôlei e praticar esportes. Faço musculação na academia e é um dos meus lugares preferidos, onde consigo relaxar e me desligar do mundo, quase como uma terapia.
        No meu tempo livre gosto de estudar, desde neurociências até programação, para adquirir um bom repertório independente da área que eu optar seguir. Acredito que ter um bom conhecimento de mundo, viver “fora da bolha” é extremamente benéfico pois possibilita uma visão fora da caixa, entendendo como você e outras pessoas funcionam em diferentes ambientes. Me dedico na grande maioria das coisas que faço, desde pequeno, pois acredito que uma pessoa que se esforça acima da média, é alguém que vai conseguir conquistar seus objetivos e consequentemente abandonar a mediocridade.
      </p>



      <div className='container2'></div>
      <div className='card-form'>
        <table className='rotina-table'>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>06:30</td>
              <td>Escola</td>
              <td>Escola</td>
              <td>Escola</td>
              <td>Escola</td>
              <td>Escola</td>
            </tr>
            <tr>
              <td>14:00</td>
              <td>Trabalho</td>
              <td>Trabalho</td>
              <td>Trabalho</td>
              <td>Trabalho</td>
              <td>Curso <br />do trabalho</td>
            </tr>
            <tr>
              <td>17:00 <br />ou 18:00</td>
              <td>Vôlei</td>
              <td>Academia</td>
              <td>Vôlei</td>
              <td>Academia</td>
              <td>Curso <br />do trabalho</td>
            </tr>
            <tr>
              <td>20:00</td>
              <td>Academia</td>
              <td>Livre</td>
              <td>Academia</td>
              <td>Livre</td>
              <td>Livre</td>             
            </tr>
          </tbody>
        </table>
      </div>

     

      {/* Botão com seta para cima */}
      <button className='botao-flecha' onClick={handleScrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
        </svg>
      </button>
    </div>
  );
}

export default Introducao;
