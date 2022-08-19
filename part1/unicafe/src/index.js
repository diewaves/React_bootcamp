import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const Statistics = (props) => {
  //Declaramos la constante con el total y las variables para los cálculos
  const all = props.good + props.neutral + props.bad;
  let average = 0;
  let positive = 0;

  //Si hay registros se calculan las medias
  if (all !== 0) {
    average = (props.good - props.bad) / all;
    positive = (props.good / all) * 100;
  }
  return (
    <div className='Statistics'>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const [clicks, setClicks] = userState([]); // Estado para el total de clicks

  //Función que actualiza el valor y renderizado del valor good
  const clickGood = (e) => {
    setGood((prevClick) => {
      return prevClick + 1;
    });
  };

  //Función que actualiza el valor y renderizado del valor neutral
  const clickNeutral = () => {
    setNeutral((prevClick) => {
      return prevClick + 1;
    });
    // setClicks((prevClicks) => [...prevClicks, 'G']); //Total de clicks al que se añade al array una letra según el botón
  };

  //Función que actualiza el valor y renderizado del valor bad
  const clickBad = () => {
    setBad((prevClick) => {
      return prevClick + 1;
    });
  };

  //Renderizado de App
  //Recuerda siempre pasar las props al componente menor
  return (
    <div className='App'>
      <h1>Give Feedback</h1>
      <button onClick={clickGood}>Good</button>
      <button onClick={clickNeutral}>Neutral</button>
      <button onClick={clickBad}>Bad</button>
      <h2>Statistics</h2>
      <div>{good + neutral + bad === 0 ? 'No feedback is given' : <Statistics good={good} neutral={neutral} bad={bad} />}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
