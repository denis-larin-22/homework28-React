import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './Button';

function App() {
  
  let [count, setCount] = useState(0)
  const increment = () => setCount(++count)
  const decrement = () => setCount(--count)
  const squared = () => setCount(count ** 2)
  const zeroing = () => setCount(0)

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="reac" />

        <h1>{count}</h1>
        <Button text='Increment' clickHendler={increment} />
        <Button text='Decrement' clickHendler={decrement} />
        <Button text='Zeroing' clickHendler={zeroing} />
        <Button text='Squared' clickHendler={squared} />
    </div>
  );
}

export default App;
