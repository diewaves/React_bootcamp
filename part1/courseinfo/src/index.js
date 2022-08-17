import React from 'react';
import ReactDOM from 'react-dom';

/* FORMA DE HACER COMPONENTE DE UNA SOLA LINEA REFACTORIZADO
const Title = ({course}) => <h1>{course}</h1>
*/

const Title = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.parte} {props.number}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part parte={props.part[0]} number={props.exercises[0]} />
      <Part parte={props.part[1]} number={props.exercises[1]} />
      <Part parte={props.part[2]} number={props.exercises[2]} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    //Enviamos la info a través de arrays para el content
    <div>
      <Title course={course} />
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
