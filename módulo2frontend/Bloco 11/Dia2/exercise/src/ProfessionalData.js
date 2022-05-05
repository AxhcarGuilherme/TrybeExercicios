import React, { Component } from "react";

class ProfessionalData extends Component {
  render() {
    const { changeHandler, state} = this.props;
    const {resume, role, roleDescription } = state;
    return (
      <fieldset>
        <h3>Informações sobre último emprego</h3>
        <label>
          Resumo do Curriculo:
          <textarea
            className="input"
            name="resume"
            value={resume}
            maxLength="1000"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          Cargo:
          <textarea
            className="input"
            name="role"
            value={role}
            maxLength="40"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          Resumo do Cargo:
          <textarea
            className="input"
            name="roleDescription"
            value={roleDescription}
            maxLength="500"
            onChange={changeHandler}
            required
          />
        </label>
      

      </fieldset>

    )
  }
}

export default ProfessionalData;
