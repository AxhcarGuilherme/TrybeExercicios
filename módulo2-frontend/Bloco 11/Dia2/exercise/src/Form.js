import React, { Component } from 'react';
import PersonalData from './PersonalData';
import ProfessionalData from './ProfessionalData';

class Form extends Component {
  render() {
    const { clearForm, changeHandler, state} = this.props
    return (
      <div>
        <form>
          <PersonalData 
            changeHandler={changeHandler}
            state={state}
          />

          <ProfessionalData 
            changeHandler={changeHandler}
            state={state}
          />
        </form>

        <button onClick={clearForm}>Reset</button>
      </div> 
    )
  }
}

export default Form;
