import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Página inicial temporária
const Home = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-8 mx-auto text-center">
        <h1>Clínica de Psicomotricidade RELACIONAL</h1>
        <p className="lead">
          Sistema de gestão implantado com sucesso!
        </p>
        <div className="alert alert-success">
          <p>O frontend está conectado ao backend em:</p>
          <code>{process.env.REACT_APP_API_URL}</code>
        </div>
        <p>
          Para acessar o sistema completo, entre em contato com o administrador para obter suas credenciais.
        </p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
