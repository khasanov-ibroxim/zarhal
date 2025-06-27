import Home from "../page/home/home.jsx";
import Contact from "@/page/contact/contact.jsx";
import About from "@/page/about/about.jsx";


export const HOME = "/"
export const CONTACT = "/contact"
export const ABOUT = "/about"


export const Index_Router = [
    {
        Path:HOME,
        Component:Home
    },
    {
        Path:CONTACT,
        Component:Contact
    },
    {
        Path:ABOUT,
        Component:About
    }
]