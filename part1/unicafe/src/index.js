import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Función que actualiza el valor y renderizado del valor good
  const clickGood = () => {
    setGood((prevContador) => {
      return prevContador + 1;
    });
  };

  //Función que actualiza el valor y renderizado del valor good
  const clickNeutral = () => {
    setNeutral((prevContador) => {
      return prevContador + 1;
    });
  };

  //Función que actualiza el valor y renderizado del valor good
  const clickBad = () => {
    setBad((prevContador) => {
      return prevContador + 1;
    });
  };

  //Renderizado de App
  return (
    <div className='App'>
      <h1>Give Feedback</h1>
      <button onClick={clickGood}>Good</button>
      <button onClick={clickNeutral}>Neutral</button>
      <button onClick={clickBad}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
