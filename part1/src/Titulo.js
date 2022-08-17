const Titulo = (props) => {
  //Puedes pasar propiedades, pero si las metes como atributo o estilo necesitas doble corchete
  return <h1 style={{ color: props.color }}>{props.message}</h1>;
};

export default Titulo;
