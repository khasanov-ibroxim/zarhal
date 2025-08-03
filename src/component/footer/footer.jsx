import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from "@/assets/logoZarhal.png"
import {ABOUT, CONTACT, HOME, PRODUCTION} from "@/utils/consts.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_title">
                    <span className="footer_title_left">
                        <span className="subtitle">Связь с нами</span>
                        <h2>Откройте диалог — начнём сотрудничество</h2>
                    </span>
                    <span className="footer_title_right">
                        <Link to={CONTACT}>Свяжитесь</Link>
                    </span>
                </div>

                <div className="footer_content">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer_item_1">
                                <img src={logo} alt="Zarhal" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
                                <p>Заполните форму или свяжитесь напрямую — мы готовы обсудить ваш проект и предложить лучшее решение.</p>
                                <div className="footer_social">
                                    <Link to={"#"} className="footer_social_item"><InstagramIcon/></Link>
                                    <Link to={"#"} className="footer_social_item"><TelegramIcon/></Link>
                                    <Link to={"#"} className="footer_social_item"><FacebookIcon/></Link>
                                    <Link to={"#"} className="footer_social_item"><WhatsAppIcon/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_2">
                                <div className="footer_item_title">
                                    <h1>Контакты</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                    <a href="#" className={"footer_tell"}>+998 65 222 07 07</a>
                                    <a href="#" className={"footer_email"}>info@zarhalgroup.uz</a>
                                    <p>Бухарская область, г. Бухара <br/>
                                        ул. Саноатчилар, 2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_3">
                                <div className="footer_item_title">
                                    <h1>Меню</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                   <ul>
                                       <li><Link to={HOME} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Главная</Link></li>
                                       <li><Link to={ABOUT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>О нас</Link></li>
                                       <li><Link to={PRODUCTION.replace(":id" , 1)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Продукция</Link></li>
                                       <li><Link to={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Контакты</Link></li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_4">
                                <div className="footer_item_title">
                                    <h1>Производство</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                    <ul>
                                        <li><Link to={PRODUCTION.replace(":id" , 1)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Хлопок</Link></li>
                                        <li><Link to={PRODUCTION.replace(":id" , 2)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Пряжа</Link></li>
                                        <li><Link to={PRODUCTION.replace(":id" , 3)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Ткани</Link></li>
                                        <li><Link to={PRODUCTION.replace(":id" , 4)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Постельное белье</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;