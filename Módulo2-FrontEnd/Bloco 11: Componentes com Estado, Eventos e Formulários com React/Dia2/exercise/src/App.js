import React, { Component } from 'react';
import './App.css';
import Form from './Form';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  updateState = (name, value) => {
    this.setState(
      {
        [name]: value
      }
    )
  }

  changeHandler = (event) => {
    let { name, value} = event.target;
    if (name === 'name') value = value.toUpperCase();

    this.updateState(name, value);
  }

  clearForm = () => { this.setState(INITIAL_STATE) };

  submitFrom = () => { this.setState({ submitted: true }) };

  render() {

    return (
      <main>
        <Form 
          changeHandler={ this.changeHandler }
          clearForm={ this.clearForm }
          state={this.state}
        />
      </main>
    );
  }
}
export default App;
