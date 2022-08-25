import { useRef } from 'react';

export default function ContagemRef() {
    
    const countRef = useRef(0);

    let value = 0;

    const contar = () => {
      countRef.current ++;
      value += 1;
      console.log(`Ref: ${countRef.current}`);
      console.log(`Value: ${value}`)
    };

    return <button onClick={contar}>Clicar!</button>;      
}