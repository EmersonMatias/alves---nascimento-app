import Whatsapp from "../assets/svg/WhatsappGreen.svg"
import Gmail from "../assets/svg/Gmail.svg"
import Instagram from "../assets/svg/Instagram.svg"
import { sendToGmail, sendToInstagram } from "./send-to-social"

export const Section5Contents = [
    {
        img: Whatsapp,
        name: "Whatsapp"
    },
    {
        img: Gmail,
        name: "Gmail",
        link: sendToGmail
    },
    {
        img: Instagram,
        name: "Instagram",
        link: sendToInstagram
    }
]