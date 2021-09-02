import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 0;
      setCount(0);
    } else if (count > 8) {
      amount = 8;
      setCount(8);
      alert("8개의 문단까지만 표시할 수 있습니다.")
    }
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button type="submit" className="btn">
          GENERATE
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
