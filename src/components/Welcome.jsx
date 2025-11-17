const Welcome = function (props) {
  console.log('PROPS del componente', props);

  // Props è un parametro del nostro componente a funzione
  // props è un OGGETTO
  return <h4>Ciao, {props.myName}!</h4>;
};

export default Welcome;
