// App.js

import React, { useState } from 'react';

function App() {
  const [marca, setMarca] = useState('');
  const [descricao, setDescricao] = useState('');
  const [roupas, setRoupas] = useState([]);

  const cadastrarRoupa = () => {
    if (marca.trim() === '' || descricao.trim() === '') {
      alert('Por favor, preencha todos os campos antes de cadastrar.');
      return;
    }

    const novaRoupa = `${marca}: ${descricao}`;
    setRoupas([...roupas, novaRoupa]);
    setMarca('');
    setDescricao('');
  };

  return (
    <div className="container">
      <h1>Cadastro de Roupas</h1>
      <form>
        <label htmlFor="roupa">Marca:</label>
        <input
          type="text"
          id="roupa"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />

        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>

        <button type="button" onClick={cadastrarRoupa}>
          Cadastrar Roupa
        </button>
      </form>

      <h2>Roupas Disponíveis</h2>
      <ul>
        {roupas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
