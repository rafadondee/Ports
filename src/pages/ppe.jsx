import React from 'react';
import { useNavigate } from 'react-router-dom';

function PPE() {
  const navigate = useNavigate();

  const handleClick = (rota) => {
    navigate(rota);
  };

  return (


    
    <div className='ppe'>
      <header className="cabecalho">
        <div>
          <button className="botao-contato" onClick={() => handleClick('/contato')}>Contato</button>
          <button className="botao-home" onClick={() => handleClick('/')}>Home</button>
          <button className="botao-introducao" onClick={() => handleClick('/introducao')}>Sobre</button>
          <button className="botao-materias" onClick={() => handleClick('/materias')}>Matérias</button>
          <button className="botao-ppe" onClick={() => handleClick('/ppe')}>PPE</button>
          <a className="botao-certificadoLinguagensPpe" href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?dxC%2fgBikZ3cOIJZez%2brgK4LsJAMcjIZQ" target="_blank">Certificado Linguagens</a>
          <a className="botao-certificadoNaturezaPpe" href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?dxC%2fgBikZ3cOIJZez%2brgK4LsJAMcjIZQ" target="_blank">Certificado Natureza</a>

        </div>
       

      </header>
      <a className="titulo-header" href='/'>Rafa</a>
      <h2 className='ppe-segundoTrimestre' style={{ animation: 'scaleIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards' }} > Segundo Trimestre </h2>

      <p className='paragrafo-certificadoLinguagensPpe'>Essa atividade do PPE consistiu em realizar <br />um curso sobre gramática com o objetivo<br /> de aprender mais sobre o uso<br /> correto da língua portuguesa.<br /> Trabalhou a H6, buscando recuperá-la. </p>
      <p className='paragrafo-certificadoNaturezaPpe'>Essa atividade do PPE consistiu em realizar <br />um curso sobre comunicação com o objetivo<br /> de aprender mais sobre a maneira de se<br /> comunicar de forma mais clara e assertiva.<br /> </p>  

</div>
    
  );
}

export default PPE;