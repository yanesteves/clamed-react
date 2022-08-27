import { useState, useRef, useEffect } from 'react';
// Exercício 09 Semana 09 
export default function Exercicio09() {

    // substituindo this.state
    const [date, setDate] = useState()

    // substituindo this.timerID
    const timerID = useRef()

    // substituindo componentDidMount
    useEffect(() => {
        timerID.current = setInterval(() => {
            setDate(new Date().toDateString())
        }, 1000);
    }, [])

    // substituindo componentWillUnmount
    useEffect(() => {
        return () => {
            clearInterval(timerID.current)
        }
    })
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date}.</h2>
        </div>
    );
}