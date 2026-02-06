import React, { useState } from 'react';
import './App.css'; 

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {

    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    if (isNaN(val1) || isNaN(val2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let calculation;
    switch (operator) {
      case '+':
        calculation = val1 + val2;
        break;
      case '-':
        calculation = val1 - val2;
        break;
      case '*':
        calculation = val1 * val2;
        break;
      case '/':
        calculation = val2 !== 0 ? val1 / val2 : "Cannot divide by zero";
        break;
      default:
        calculation = 0;
    }
    setResult(calculation);
  };

  return (
    <div className="App" style={{ padding: '50px', textAlign: 'center' }}>
      <h1>React Assignment 1</h1>
      <h2>Simple Calculator</h2>

      <div className="calculator-container">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <br /><br />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br /><br />

        <div className="buttons">
          <button onClick={() => handleCalculation('+')}>Add (+)</button>
          <button onClick={() => handleCalculation('-')}>Subtract (-)</button>
          <button onClick={() => handleCalculation('*')}>Multiply (*)</button>
          <button onClick={() => handleCalculation('/')}>Divide (/)</button>
        </div>

        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          border: '2px solid #61dafb', 
          borderRadius: '10px',
          display: 'inline-block',
          minWidth: '200px'
        }}>
          <strong>Output:</strong> {result !== null ? result : "No calculation yet"}
        </div>
      </div>
    </div>
  );
}

export default App;