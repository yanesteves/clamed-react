import React from 'react';

// Modelo baseado em Classe
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Senai' };
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div style={{
        'display': 'flex', 'flexDirection': 'column', 'max-width': '240px', 'padding': '20px'
      }}>
        <span style={{'marginBottom': '10px'}}><b>Texto digitado: </b>{this.state.text}</span>
        <input value={this.state.text} onChange={this.changeText}></input>
      </div>
    )
  }
};