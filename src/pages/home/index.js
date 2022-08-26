import '../../App.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  // Utilizo useState para ter uma variável e um método para controle,
  // A cada atualização da variável será "gerada" também uma atualização da view.
  // A inicialização do useState retorna uma variável (text) e um método para atualização (setText) que podem receber qualquer nome.
  const [text, setText] = useState('Senai')

  // Utilizo o useEffect com uma condição de controle (alteração na variável text). 
  // A cada atualização de "text" será lançado um console.log.
  useEffect(() => {
    console.log(`Variável "text" foi modificada`)
  }, [text])

  useEffect(() => {
    console.log('Componente sendo montado.')
    return () => {
      console.log('Componente sendo desmontado.')
    }
  })

  return (
    <div style={{
      'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'padding': '20px'
    }}>
      <span style={{ 'marginBottom': '10px' }}><b>Texto digitado: </b>{text}</span>
      {/* Para o input, declaro o valor inicial dele como o valor inicial da variável text e a cada atualização do input (onChange) chamo o método setText e passo o valor digitado pelo usuário. */}
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
    </div>
  )
}