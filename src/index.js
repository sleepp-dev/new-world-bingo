import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener('load', e=>{
  let tiles = document.querySelectorAll('.tile')

  //onLoad animation--only for brand new cards
  if (localStorage.getItem('completions') === null) {
    tiles.forEach((tile, i)=>{
      setTimeout(()=>tile.classList.toggle('flipped'), i*25)
    })
  }
});
