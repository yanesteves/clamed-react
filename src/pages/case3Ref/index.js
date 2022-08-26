import React, { useRef, useState, useEffect } from "react";

export default function Case3Ref() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    console.log('useEffect')
    prevCountRef.current = count;
  });

  console.log('Adc o prevCount.')
  const prevCount = prevCountRef.current;
  console.log(prevCount)
  return (
    <>
      <h3>
        Valor do contador agora: {count} <br />
        Valor do contador antes: {prevCount}
      </h3>
      <button onClick={() => setCount(count + 1)}>Somar um ao contador</button>
    </>
  );
}
