import React, { Component } from 'react';

class PersonalData extends Component {
  render() {
    const { changeHandler, state} = this.props;
    const {name, address, city, email, cpf} = state;
    return (
      <fieldset className='personalSection'>
        <h2>Informações Pessoais</h2>
        <br/>
        <label>
          Nome:
          <textarea
            className="input"
            name="name"
            value={ name }
            type="text"
            maxLength="40"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          E-Mail:
          <textarea
            className="input"
            name="email"
            type="email"
            value={email}
            maxLength="50"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          CPF:
          <textarea 
            className="input"
            name="cpf"
            type="text"
            value={cpf}
            maxLength="11"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          Endereço:
          <textarea 
            className="input"
            name="address"
            value={address}
            type="text"
            maxLength="200"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          Cidade:
          <textarea 
            className="input"
            name="city"
            type="text"
            value={city}
            maxLength="28"
            onChange={changeHandler}
            required
          />
        </label>
        <label>
          <select name="countryState">
            <option>Estado</option>
            <option value="sp">SP</option>
            <option value="mg">MG</option>
            <option value="rj">RJ</option>
            <option value="es">ES</option>
            <option value="rn">RN</option>
            <option value="rs">RS</option>
          </select>
        </label>
        <label>
          Tipo de Moradia:
          <label>
            Casa
            <textarea 
              name="moradia"
              type="radio"
            />
          </label>
          <label>
            Apartamento
            <textarea 
              name="moradia"
              type="radio"
            />
          </label>
        </label>
      </fieldset>
    )
  }
}

export default PersonalData;
