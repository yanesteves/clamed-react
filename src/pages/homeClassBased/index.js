import { Component } from 'react';

// Modelo baseado em Classe
export default class HomeClassBased extends Component {
    
  constructor(props) {
    super(props);
    this.state = { text: 'Senai' };
    this.changeText = this.changeText.bind(this);
  }

  componentWillMount() {
    console.log('O componente está pronto para ser montado.')
  }

  componentDidMount() {
    console.log('O componente foi montado')
  }

  componentWillUnmount() {
    console.log('Componente será desmontado');
  }

  changeText(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div style={{
        'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'padding': '20px'
      }}>
        <span style={{'marginBottom': '10px'}}><b>Texto digitado: </b>{this.state.text}</span>
        <input value={this.state.text} onChange={this.changeText}></input>
      </div>
    )
  }
};