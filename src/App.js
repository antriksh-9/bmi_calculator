import "./App.css";
import React, { useState } from 'react';

function App() {

const [weight,setWeight] = useState();
const [height,setHeight] = useState();
const [message,setMessage] = useState("");
const [bmi,setBMI] = useState("");

let calcBMI = (e) => {

  e.preventDefault();

  if(weight===0 || height===0){
    alert("Please enter valid weight/height");
  }
  else if(weight===0 && height===0){
    alert("Please enter valid height and weight");
  }
  else{
    let bmi = (weight)/(height*height);
    setBMI(bmi.toFixed(1));

    if(bmi<18.5){
      setMessage("You are underweight");
    }
    else if(bmi>=18.5 && bmi<24.9){
      setMessage("You are healthy");
    }
    else if(bmi>=25 && bmi<30){
      setMessage("You are overweight"); 
    }
    else{
      setMessage("You are obese");
    }
  }
}

let reload = () => {
  window.location.reload();
}

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (m)</label>
            <input
              type="number"
              step="0.01"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Calculate
            </button>
            <button className=" btn btn-reload" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
