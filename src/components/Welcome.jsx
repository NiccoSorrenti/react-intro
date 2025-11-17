const Welcome = function (props) {
  console.log('PROPS DEL COMPONENTE', props);
  // props è un parametro del nostro componente a funzione
  // props è UN OGGETTO, che contiene TUTTE le prop passate/ricevute dal componente
  return <h4>Ciao, {props.myName}!</h4>;
};

export default Welcome;
