import { useForm } from "react-hook-form";
import Style from "./style";
import sendEmail from "./function";

export interface TForm {
    name: string,
    email: string,
    message: string,
}

export default function Form() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<TForm>()

    return (
        <Style.Container onSubmit={handleSubmit((e) => sendEmail(e, reset))}>
            <h4>Mande-nos um email</h4>

            <span>
                <input {...register('name', { required: true })} type="text" placeholder="Digite seu nome completo" />
                {errors.name && <p>Por favor, digite seu nome</p>}
            </span>


            <span>
                <input {...register('email', { required: true })} type="email" placeholder="Digite seu email" />
                {errors.email && <p>Por favor, digite seu email</p>}
            </span>

            <span>
                <textarea className="message" {...register('message', { required: true })} placeholder="Digite sua mensagem" />
                {errors.message && <p>Por favor, digite sua mensagem</p>}
            </span>


            <button>Enviar</button>

        </Style.Container>
    )
}