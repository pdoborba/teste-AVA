import React, { Component } from 'react'
import './CreateActivities.css'

export default class CreateActivities extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Uma atividade foi enviada: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="formActivities" onSubmit={this.handleSubmit}>
          <label>
            <h3> Sua próxima atividade será: </h3>
            <textarea value={this.state.value} onChange={this.handleChange} placeholder="Descreva a proxima atividade."/>
            <input className="button buttonSubmit" type="submit" value="Enviar" />
          </label>
        </form>
      );
    }
  }