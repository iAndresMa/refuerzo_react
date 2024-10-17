import {useCounter} from "../hooks/useCounter.tsx";

export const CounterWithHook = () => {
    const {count, increaseBy} = useCounter({
        initialVlue: 0
    })
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