import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter numbers first!");
      return;
    }

    if (operator === '+') setResult(n1 + n2);
    if (operator === '-') setResult(n1 - n2);
    if (operator === '*') setResult(n1 * n2);
    if (operator === '/') setResult(n2 !== 0 ? n1 / n2 : "Can't divide by 0");
  };

  return (
    <div className="container">
      <h1>My Calculator</h1>
      <div className="calculator-box">
        <input 
          type="number" 
          placeholder="First Number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Second Number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
        />
        
        <div className="button-row">
          <button onClick={() => calculate('+')}>+</button>
          <button onClick={() => calculate('-')}>-</button>
          <button onClick={() => calculate('*')}>*</button>
          <button onClick={() => calculate('/')}>/</button>
        </div>

        <div className="output">
          <strong>Result:</strong> {result}
        </div>
      </div>
    </div>
  );
}

export default App;