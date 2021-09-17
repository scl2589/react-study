import React, { useSTate, useEffect } from 'react';

export default function App() {
    const [count, setCount ] = useState(0);
    function onClick() {
        setCount(v => v + 1);
        setCount(v => v + 1);
    }

    console.log('render called')
    return (
        <div>
            <h2>{count}</h2>
            <button onCLick={onClick}>증가</button>
        </div>
    )
}