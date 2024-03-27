import emailjs from "@emailjs/browser"
import { TForm } from "./form"

export default async function sendEmail(e: TForm, reset: () => void) {
    const SERVICE_ID = "service_uam0job"
    const TEMPLATE_ID = "template_i4gxy2l"
    const TEMPLATE_PARAMS = {
        from_name: e.name,
        message: e.message,
        from_email: e.email
    }
    const PUBLIC_KEY = "aV0RiD2Aw4LSt0ifh"

    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS, PUBLIC_KEY)
        reset()
    } catch (error) {
        console.log(error)
    }

}