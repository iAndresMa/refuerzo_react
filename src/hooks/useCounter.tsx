import {useState} from "react";

interface Options{
    initialVlue: number
}
export const useCounter = (
    {initialVlue = 0}: Options
) => {
    const [count, setConunt] = useState(initialVlue);
    const increaseBy = (value: number) => {
        const newValue = count + value;
        if( newValue < 0) return;
        setConunt(count + value);
    }
    return {
        //propiedades
        count,
        //metodos
        increaseBy
    }
}