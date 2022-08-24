import '../../App.css';
import { useState } from 'react';
// Semana 09 - Aula 2
// Comparação entre useState e associação direta de valor na variável.
export default function Case1() {
  let a = 0;
  const [b, setB] = useState(0);

  function setNewValueA() {
    a += 1;
    console.log(`Novo valor de A: ${a}`);
  }
  return (
    <div className="App">
      <div>
        Local: {a}
        <button onClick={setNewValueA}>Variável Local (A)</button>
      </div>
      <div>
        Estado: {b}
        <button onClick={() => setB(prevB => prevB + 1)}>
          Variável de Estado (B)
        </button>
      </div>
    </div>
  );
}
