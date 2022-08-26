import { useRef } from 'react';

export default function ContagemRef() {

  const countRef = useRef(0);
  let value = 0;

  function contar() {
    countRef.current++;
    value += 1;
    console.log(`Ref: ${countRef.current}`);
    console.log(`Value: ${value}`)
  };

  return (
    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
      <label>REF: {countRef.current}</label>
      <label>Value: {value}</label>
      <button onClick={contar}>Salvar</button>

    </div>
  );
}