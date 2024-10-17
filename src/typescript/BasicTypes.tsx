export const BasicTypes = () => {
    const name: string = 'Andrés';
    const age: number = 34;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'Agular', 'Vue', 'Quik', 'PHP'];
    return (
        <>
            <h3>Tipos básicos</h3>
            { name } { age } { isActive ? 'true': 'false' }
            <br/>
            { powers.join(', ') }
        </>
    )
}