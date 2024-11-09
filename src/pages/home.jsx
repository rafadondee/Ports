
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const irPara = useNavigate();
  const handleClick = () => {
    irPara('/introducao');
  };

  return (
    <div className='home' style={{ backgroundColor: '#f8f8f8' }}>
      <h1>Rafael Dondé</h1>
      <p>Fique à vontade para explorar meu portfólio!</p>
      <img src="/rafa-lindao.jpg" alt="Gif inicial" />
      <button onClick={handleClick}>Vamos lá!</button>
    </div>
  );
}

export default Home;

