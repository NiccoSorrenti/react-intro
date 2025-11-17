// InputField è un altro componente React
// tornerà un singolo campo Input

import { Component } from 'react';

// questo componente sarà realizzato sotto forma di CLASSE
// i componenti a CLASSE sono leggermente più complessi ma come vedremo
// sbloccano ulteriori "superpoteri!"

// il nome della classe è === al nome del file
// ogni componente a classe che creerete ESTENDERÀ dal componente a classe
// PRINCIPALE in REACT: si chiama "Component"

class InputField extends Component {
  render() {
    // il metodo "render" è obbligatorio nei componenti a classe
    return <input placeholder={this.props.pholder} />;
    // ogni invocazione di InputField avrà il suo placeholder dedicato!
  }
}

export default InputField;
