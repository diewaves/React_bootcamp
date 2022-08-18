import './App.css';

import Titulo from './Titulo.js'; //Importar componente

//Nuevo componente
//SIEMPRE Crea un componente fuera de otro, NUNCA dentro
const Mensaje = () => {
  //Siempre se nombran en Mayuscula los componentes para diferenciarlos de etiquetas html
  const mensaje = 'Hola'; //Declaramos variable antes del return
  return <div>{mensaje}</div>; //Recuperamos la variable con corchetes
};

const App = () => {
  return (
    //Siempre debe retornar un solo elemento, en un componente puede devolverse un fragment <></>
    <div className='App'>
      <Mensaje />
      <Titulo color='red' message='Este es un mensaje' />
    </div>
  ); //Usamos el componente pasandole un prompt
};

export default App; //Siempre hay que exportar el componente
