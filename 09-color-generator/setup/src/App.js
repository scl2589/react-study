import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f12345');
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(10);
  const [list, setList] = useState(new Values('#f12345').all(number));

  async function fetchColors() {
    return await new Values(color).all(number)
  }

  async function settingNumber(e) {
    await setNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = fetchColors();
      setList(colors)
    } catch(error) {
      setError(true);
      console.log(error);
    }
  }

  const handleNumberSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(number);
      let colors = new Values(color).all(number)
      console.log(colors);
      setList(colors)
      console.log(list);
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f12345" className={`${error ? 'error' : null}`}/>
          <button className="btn" type="submit">submit</button>
          
        </form>
        <form onSubmit={handleNumberSubmit}>
          <input type="number" min="1" max="100" value={number} onChange={(e) => settingNumber(e)} placeholder="5" />
          <button className="btn" type="submit">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index)=>{
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
  )
}

export default App
