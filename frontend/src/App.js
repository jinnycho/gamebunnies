import React from 'react';
import './styles/eyegame.css';
import { Route, Routes } from 'react-router-dom';
import { EyeGame } from './components/EyeGame';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <EyeGame
        />
      }/>
    </Routes>
  );
}

export default App;