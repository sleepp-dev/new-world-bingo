import { TERMINATORLESS_TYPES } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function waitForElms(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelectorAll(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelectorAll(selector)) {
              resolve(document.querySelectorAll(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}

//onLoad animation--only for brand new cards
window.addEventListener('load', e=>{

    waitForElms('.tile').then((tiles) => {
      if (!localStorage.getItem('completions')) {
          tiles.forEach((tile, i)=>{
          console.log(`flipping ${i}`)
          setTimeout(()=>tile.classList.toggle('flipped'), i*25)
          console.log(`flipped ${i}`)
      })
    }
  })

});


