import Card from './Components/Card'
import bingoItems from './utils/bingoItems'
import { createContext } from 'react';

export const BingoContext = createContext()

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function App() {
  let n=5;

  let completions = JSON.parse(localStorage.getItem('completions')) || Array(n*n).fill(-1);
  const sampledItems = JSON.parse(localStorage.getItem('items')) || shuffle(bingoItems).slice(0, n*n)

  // Stamping a tile saves the current card
  if (JSON.parse(localStorage.getItem('completions'))) {
    localStorage.setItem('items', JSON.stringify(sampledItems))
  }


  function clearLocalStorage() {
    localStorage.removeItem('completions')
    localStorage.removeItem('items')
    window.location.reload()
  }

  return (
    <BingoContext.Provider value={[sampledItems, completions]}>
      <div className="App">
        <h1>New World Drama Bingo</h1>
        <Card n={n} items={sampledItems}/>
        <button onClick={clearLocalStorage}>Forget this card</button>
      </div>
    </BingoContext.Provider>
  );
}

export default App;
