import emailjs from "@emailjs/browser"
import { TForm } from "./form"

export default async function sendEmail(e: TForm, reset: () => void) {
    const SERVICE_ID = "service_llga5fd"
    const TEMPLATE_ID = "template_kkavr6e"
    const TEMPLATE_PARAMS = {
        from_name: e.name,
        message: e.message,
        from_email: e.email
    }
    const PUBLIC_KEY = "Lq2BBhrxpn3qxgZaQ"

    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, PUBLIC_KEY)
        reset()
    } catch (error) {
        console.log(error)
    }

}