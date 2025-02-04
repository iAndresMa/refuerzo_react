import {useForm} from "react-hook-form";

type FormInputs = {
    email: string;
    password: string;
};
export const FormsPage = () => {
    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'andres.marentes@gmail.com',
            password: 'abd123'
        }
    });
    const onSubmit = (myForm: FormInputs) => {
        console.log(myForm);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formulario</h3>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input type="text" placeholder="Email" {...register('email', { required: true })}/>
                    <input type="password" placeholder="Password" {...register('password', { required: true })}/>
                    <button type="submit">Ingresar</button>
                </div>
            </form>
            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </>
    )
}