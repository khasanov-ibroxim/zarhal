import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {home_translate} from "@/utils/lang/translates/home_translate.jsx";

import {contact_translate} from "@/utils/lang/translates/contact_translate.jsx";

import {production_translate} from "@/utils/lang/translates/production_translate.jsx";
import {about_translate} from "@/utils/lang/translates/about_translate.jsx";
import {blog_translate} from "@/utils/lang/translates/blog_translate.jsx";



i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            ru: {
                translation: {
                    home: home_translate.ru,
                    about:about_translate.ru,
                    blog:blog_translate.ru,
                    contact: contact_translate.ru,

                    production: production_translate.ru,

                    navbar: {
                        nav_top:{
                            mail:"Отправить письмо",
                            time:"Часы работы",
                            time_d:"Пн – Пт с 09-00 до 18-00",
                            tell:"Есть вопросы ?"
                        },
                        home: "Главная",
                        about: "О нас",
                        production: "Производство",
                        contact: "Контакты",
                        btn:"Свяжитесь"
                    },
                    footer:{
                        subtitle:"Связь с нами",
                        title:`Свяжитесь с нами — мы подберём оптимальное решение под ваши задачи.`,
                        link:`Свяжитесь`,
                        f1:{
                            title:"Контакты",
                            l1:"Узбекистан , г.Бухара ",
                        },
                        f2:{
                            title:"Меню",
                            l1:"Главная",
                            l2:"О нас",
                            l3:"Контакты",
                        },
                        f3:{
                            title:"Производство",
                            l1:"Хлопок",
                            l2:"Пряжа",
                            l3:"Ткани",
                            l4:"Готовая продукция",
                        },
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
            en: {
                translation: {
                    home: home_translate.en,
                    about:about_translate.en,
                    blog:blog_translate.en,
                    contact: contact_translate.en,

                    production: production_translate.en,

                    navbar: {
                        nav_top:{
                            mail:"Email",
                            time:"Working hours",
                            time_d:"Mon – Fri, 09:00 – 18:00",
                            tell:"Have any questions?"
                        },
                        home: "Home",
                        about: "About Us",
                        production: "Production",
                        contact: "Contacts",
                        btn:"Contact Us"
                    },
                    footer:{
                        subtitle:"Get in Touch",
                        title:`Contact us — we will find the optimal solution for your needs.`,
                        link:`Contact Us`,
                        f1:{
                            title:"Contacts",
                            l1:"Republic of Uzbekistan, Bukhara",
                        },
                        f2:{
                            title:"Menu",
                            l1:"Home",
                            l2:"About Us",
                            l3:"Contacts",
                        },
                        f3:{
                            title:"Production",
                            l1:"Cotton",
                            l2:"Yarn",
                            l3:"Fabrics",
                            l4:"Finished Products",
                        },
                    },
                    errors: {
                        success: "A message has been sent, we will contact you shortly",
                        name_empty: "Your name cannot be empty",
                        name_error: "You typed your name incorrectly",
                        tell_error: "Your phone number is incorrect",
                        server_error: "A system error has occurred"
                    }
                }
            },
        },
    });

export default i18n;
