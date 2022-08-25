import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Páginas disponíveis para carregar no react
import App from './App';
import Home from './pages/home';
import StarWars from './pages/starWars';
import NFTStore from './pages/nftStore';
import Case1 from './pages/case1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Descomente/Comente o componente (página) que você deseja visualizar/ocultar */}
    {/* <App /> */}
    {/* <Home /> */}
    {/* <StarWars /> */}
    {/* <Case1 /> */}
     <NFTStore />    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
