import {useState, useContext} from 'react';
import StampIcon from './StampIcon';
import {BingoContext} from '../App';

export default function Tile( {item, i} ) {
    const [, completions] = useContext(BingoContext)
    const [completionStatus, setCompletionStatus] = useState(completions[i] || -1)

function toggleCompletionStatus() {
    setCompletionStatus(completionStatus * -1) // 1 = complete; -1 = incomplete
    completions[i] *= -1
    localStorage.setItem('completions', JSON.stringify(completions))
}

let stamp = <></>
if (completionStatus > 0) {
    stamp = (
        <div className='stamp'>
            <StampIcon />
        </div>
    )
}

let flipped=''
if (localStorage.getItem('completions')) {
    flipped='flipped'
}

    return (
        <div className={'tile ' + flipped} onClick={toggleCompletionStatus}>
            {stamp}
            <div className='front'>
                <p>New World</p>
            </div>
            <div className='back'>
                <p>{item}</p>
            </div>

        </div>
    )
}