import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(null);
  let [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState(null);

  function click() {
    if (weight > 0 && height > 0) {
      const bmiValue = (weight * 703) / (height * height);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi("Invalid input");
    }
  }
  function badlaav(e) {
    setWeight(e.target.value);
  }

  function badlaav2(e) {
    setHeight(e.target.value);
  }

  let healthMessage = null;
  if (bmi) {
    if (bmi > 25) {
      healthMessage = <div>It is unhealthy</div>;
    } else {
      healthMessage = <div>It is healthy</div>;
    }
  }
  return (
    <>
      <h1>BMI CALCULATOR</h1>
      <div className="change">
        <div>Weight(LBS)</div>
        <input
          type="text"
          placeholder="WEIGHT IN (LBS)"
          value={weight}
          onChange={badlaav}
        />
        <div>Height(in)</div>
        <input
          type="text"
          placeholder="HEIGHT IN (IN)"
          value={height}
          onChange={badlaav2}
        />
        <br />
        <button onClick={click}>HERE WE GO</button>
        <div>Result :{bmi}</div>
        <h1>{healthMessage}</h1>
      </div>
    </>
  );
}

export default App;
