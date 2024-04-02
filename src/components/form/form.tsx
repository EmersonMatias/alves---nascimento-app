import { useForm } from "react-hook-form";
import Style from "./style";
import sendEmail from "./function";
import { useState } from "react";

export interface TForm {
    name: string,
    email: string,
    message: string,
    phone: string
}

export default function Form() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm<TForm>()
    const [loading, setLoading] = useState(false)

    return (
        <Style.Container onSubmit={handleSubmit((e) => sendEmail(e, reset, setLoading))}>
            <h4>Mande-nos um email</h4>

            <span>
                <input disabled={loading} {...register('name', { required: true })} type="text" placeholder="Digite seu nome completo" />
                {errors.name && <p>Por favor, digite seu nome</p>}
            </span>
 

            <span>
                <input disabled={loading} {...register('email', { required: true })} type="email" placeholder="Digite seu email" />
                {errors.email && <p>Por favor, digite seu email</p>}
            </span>

            <span>
                <input disabled={loading} {...register('phone', { required: true,minLength:{value: 11, message: "Por favor, digite um telefone válido" } })} type="tel" placeholder="Digite seu telefone" />
                {errors.phone && <p>Por favor, digite seu telefone</p>}
            </span>

            <span>
                <textarea disabled={loading}  className="message" {...register('message', { required: true })} placeholder="Digite sua mensagem" />
                {errors.message && <p>Por favor, digite sua mensagem</p>}
            </span>


            <button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>

        </Style.Container>
    )
}