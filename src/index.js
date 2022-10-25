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

  let tiles = document.querySelectorAll('.tileInner')
  tiles.forEach(tile=>{
    tile.addEventListener('click', e=>{
      tile.classList.toggle('flipped')
      console.log('hi')
    })
  })

});
