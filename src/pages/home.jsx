
import React from 'react';
import { useNavigate } from 'react-router-dom';

function home() {

  const irPara = useNavigate();
  const handleClick = () => {
   
    irPara('/introducao');
  };
 
  return (
    <div className='home' style={{ backgroundColor: '#f8f8f8' }}> 
      <h1>Rafael Dondé</h1>      
      <p>Fique a vontade para explorar meu portfólio!</p>
      <img src="emoji-pistola.png" alt="Gif inicial" />
      <button onClick={handleClick}>Vamos lá!</button>
    </div>
  );
}

export default home;
