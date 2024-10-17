interface Person {
    fullName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}
interface Address{
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {
    const person: Person = {
        fullName: 'Andrés',
        lastName: 'Marentes',
        age:    35,
        address: {
            country: "Colombia",
            houseNo: 720
        },
        isAlive: true
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                { JSON.stringify(person, null, 2) }
            </pre>
        </>
    )
}