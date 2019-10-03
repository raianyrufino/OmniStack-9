import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong>para programadores e encontre<strong>talentos</strong> para jicj
        </p>

        <form>
          <label htmlFor="email">E-MAIL</label>
          <input
            id="email"
            type="email"
            placeholder="Seu melhor email"
          />

          <button type="submit"></button>
        </form>
      </div>

    </div>
  );
}

export default App;
