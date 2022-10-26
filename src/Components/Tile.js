import {useState, useContext} from 'react';
import StampIcon from './StampIcon';
import {BingoContext} from '../App';

export default function Tile( {item, i} ) {
    const [items, completions] = useContext(BingoContext)
    const [completionStatus, setCompletionStatus] = useState(completions[i] || -1)

function toggleCompletionStatus() {
    setCompletionStatus(completionStatus * -1) // 1 = complete; -1 = incomplete
    completions[i] *= -1
    localStorage.setItem('completions', JSON.stringify(completions))
    localStorage.setItem('items', JSON.stringify(items))
}

let stamp = <></>
if (completionStatus > 0) {
    stamp = (
        <div className='stamp'>
            <StampIcon />
        </div>
    )
}

let flipped=' flipped'
if (!localStorage.getItem('completions')) {
    flipped=''
}

    return (
        <div className={'tile' + flipped} onClick={toggleCompletionStatus}>
            {stamp}
            <div className='front'>
            </div>
            <div className='back'>
                <p>{item}</p>
            </div>

        </div>
    )
}