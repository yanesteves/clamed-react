import './style.css';
import { useRef } from 'react';

export default function Exercicio05() {

  const profissaoRef = useRef(0);  

  function analisaTecla(e) {
    if (e.key === 'Enter') {
        profissaoRef.current.focus();
    }
  }


  return (
    <div className='div-focus'>
        <input type='text' onKeyUp={analisaTecla} placeholder='Nome'></input>
        <input ref={profissaoRef} type='text' placeholder='Profissão'></input>
    </div>
  )  
}

