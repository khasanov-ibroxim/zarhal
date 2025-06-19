import Home from "../page/home/home.jsx";
import Contact from "@/page/contact/contact.jsx";


export const HOME = "/"
export const CONTACT = "/contact"


export const Index_Router = [
    {
        Path:HOME,
        Component:Home
    },
    {
        Path:CONTACT,
        Component:Contact
    }
]