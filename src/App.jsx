import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Participantes from "./components/Participantes";

const App = () => {
  const [participantes, setParticipantes] = useState([
    {
      id: "1",
      organizationName: "aaa",
      customerFriendlyLogoUri: "bbb",
      customerFriendlyName: "ccc",
      url_server: "ddd",
    },
    {
      id: "2",
      organizationName: "eee",
      customerFriendlyLogoUri: "fff",
      customerFriendlyName: "ggg",
      url_server: "hhh",
    }
  ])

  useEffect(() => {
    const fetchParticipantes = async () => {
      // todo
      setParticipantes(participantes);
    }
    fetchParticipantes();
  },[])

  return (
    <>
      <Navbar />
      <Participantes participantes={participantes}/>
    </>
  );
}

export default App;
