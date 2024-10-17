import { useState } from "react";

export const Counter = () => {
    const [count, setConunt] = useState(10);
    const increaseBy = (vale: number) => {
        setConunt(count + vale);
    }
    return (
        <>
            <h3>Counter</h3>
            <p>Contador: <small>{ count }</small></p>
            <div>
                <button onClick={ () => increaseBy(+1) }>+1</button>
                &nbsp;
                <button onClick={() => increaseBy(-1)}>-1</button>
            </div>
        </>
    )
}