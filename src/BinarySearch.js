import React, { useState } from 'react'
import bs from './bs';

function BinarySearch(props) {
    const [result, setResult] = useState(null);
    const [input, setInput] = useState('');
    const [timer, setTimer] = useState(null)

    if (input) {
        if (bs(props.arr, input) !== result) {
            const d = new Date()
            console.log(d)
            setResult(bs(props.arr, input))
            const diff = new Date() - d;
            console.log(diff)
            setTimer(diff)

        }
    }


    return (
        <div>
            <h3>Binary Search</h3>
            <textarea value={input} onChange={e => setInput(e.target.value)} name='binary-search' />
            {result && input.trim() > 0
                ? <div className='result'>
                    <p>{result} in {timer} milliseconds</p>
                </div>
                : null}
        </div>
    )
}

export default BinarySearch
