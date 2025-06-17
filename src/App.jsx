import { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "DEL") {
      setExpression(expression.slice(0, -1));
    } else if (value === "=") {
      try {
        const evalResult = eval(
          expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/,/g, ".") // koma jadi titik
        );
        setResult(evalResult);
      } catch (err) {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="container_calculator">
      <div className="calculator">

        <div className="container_screen">
          <div className="screen" style={{  fontSize: '18px' }}>
            <div className='value_screen' >{expression || "0"}</div>
            <div className='value_screen'  style={{ fontWeight: "bold", fontSize: "22px", marginTop: "8px" }}>
              {result}
            </div>
          </div>
        </div>

        <div className="calculator_buttons">
          {[
            "C", ",", "DEL", "×",
            "1", "2", "3", "÷",
            "4", "5", "6", "-",
            "7", "8", "9", "+",
            "0", ".", "="
          ].map((btn, index) => (
            <button
              key={index}
              className={`btn ${btn === "0" ? "btn-span-2" : ""}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
