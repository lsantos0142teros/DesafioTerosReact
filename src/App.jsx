import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Participantes from "./components/Participantes";
import Botao from './components/Botao';


const App = () => {
  const [participantes, setParticipantes] = useState([])

  useEffect(() => {
    const fetchParticipantes = async () => {
      fetch("http://localhost:3000/participantes/", {method: "GET"}).then(response => response.json())
      .then(response => {
        setParticipantes(response)
      })
    }
    fetchParticipantes();
  });

  const handleBotaoClick = () => {
    const deletarBd = async () => {
      fetch("http://localhost:3000/participantes/", {method: "DELETE"}).then(response => response.json())
      .then( (response) => {console.log(response)} )
    }
    deletarBd();
  }

  return (
    <>
      <Navbar />
      <div className='frame'>
        <div className='titulo'>Participantes do Open Banking</div>
        <Participantes participantes={participantes}/>
      </div>
      <div className='auto-destruir'><Botao onClick={handleBotaoClick}>Deletar Banco de Dados</Botao></div>
    </>
  );
}

export default App;
