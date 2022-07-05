import './App.css';
import React, { useState } from 'react';
import Display from './Components/Display';
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0);
  
  const increament = (value) =>{
    setCount(count + parseInt(value));
  }
  return (
    <div className="App">
      <Display msg={count}/>
      <Button increamentBy={increament}/>
    </div>
  );
}

export default App;
