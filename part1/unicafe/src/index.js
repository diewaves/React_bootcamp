import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'; // Upgrade to React 18 use instead ReactDOM
const container = document.getElementById('root');
const root = createRoot(container); // Upgrade to React 18

//Componente del botón al que le pasamos el texto y la función de click
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

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
      <table>
        <tbody>
          <Statistic text='good' value={props.good}></Statistic>
          <Statistic text='neutral' value={props.neutral}></Statistic>
          <Statistic text='bad' value={props.bad}></Statistic>
          <Statistic text='all' value={all}></Statistic>
          <Statistic text='average' value={average}></Statistic>
          <Statistic text='positive' value={positive}></Statistic>
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
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

  //Para pasarle una función directa se haría así
  // <button onClick={clickGood}>Good</button>

  //Renderizado de App
  //Recuerda siempre pasar las props al componente menor
  // Metemos un condicional ternario para evaluar si hay estadísitcas
  return (
    <div className='App'>
      <h1>Give Feedback</h1>
      <Button handleClick={() => clickGood()} text='Good'></Button>
      <Button handleClick={() => clickNeutral()} text='Neutral'></Button>
      <Button handleClick={() => clickBad()} text='Bad'></Button>
      <h2>Statistics</h2>
      <div>{good + neutral + bad === 0 ? 'No feedback is given' : <Statistics good={good} neutral={neutral} bad={bad} />}</div>
    </div>
  );
};

root.render(<App />); // Upgrade to React 18 se instead ReactDOM
