import React, { useState, useEffect } from 'react';

export default function App() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        // 1초에 한 번씩 seconds 상태값 변경 
        setTimeout(() => {
            setSeconds(v => v + 1);
        }, 1000)
    })
    return (
        <div key={seconds}>
            <h1 style={{color: seconds % 2 ? 'red' : 'blue'}}>안녕하세요</h1>
            <h2>지금까지 {seconds} 초가 지났습니다.</h2>
        </div>
    )
}