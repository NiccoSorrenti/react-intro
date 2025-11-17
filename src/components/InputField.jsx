import { Component } from 'react';

class InputField extends Component {
  render() {
    return <input placeholder={this.props.pholder} />;
  }
}

export default InputField;
