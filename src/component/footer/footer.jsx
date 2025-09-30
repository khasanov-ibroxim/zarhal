import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from "@/assets/logoZarhal.png"
import {ABOUT, BLOG, CONTACT, HOME, PRODUCTION} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer>
            <div className="container">
                <div className="footer_title">
                    <span className="footer_title_left">
                        <span className="subtitle">{t("footer.subtitle")}</span>
                        <h2>{t("footer.title")}</h2>
                    </span>
                    <span className="footer_title_right">

                    </span>
                </div>

                <div className="footer_content">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer_item_1">
                                <img src={logo} alt="Zarhal" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
                                <div className="footer_social mt-5">
                                    <Link to={"https://www.instagram.com/zarhalgroup?igsh=emV5NXg1MWFxbnl0"} className="footer_social_item"><InstagramIcon/></Link>
                                    <Link to={"https://t.me/zarhalgroupuz"} className="footer_social_item"><TelegramIcon/></Link>
                                    <Link to={"#"} className="footer_social_item"><FacebookIcon/></Link>
                                    <Link to={"https://wa.me/qr/RJOPEGJYPE7CA1"} className="footer_social_item"><WhatsAppIcon/></Link>
                                    <Link to={"https://youtu.be/gr9ZqjSdhFchttps://youtu.be/gr9ZqjSdhFc"} className="footer_social_item"><YouTubeIcon/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_2">
                                <div className="footer_item_title">
                                    <h1>{t("footer.f1.title")}</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                    <a href="tel:+998652220707" className={"footer_tell"}>+998 65 222 07 07</a>
                                    <a href="tel:+998772729922" className={"footer_tell"}>+998 77 272 99 22</a>
                                    <a href="#" className={"footer_email"}>info@zarhalgroup.uz</a>
                                    <p>{t("footer.f1.l1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_3">
                                <div className="footer_item_title">
                                    <h1>{t("footer.f2.title")}</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                   <ul>
                                       <li><Link to={HOME} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.f2.l1")}</Link></li>
                                       <li><Link to={ABOUT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.f2.l2")}</Link></li>
                                       <li><Link to={BLOG} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("blog.page_title")}</Link></li>
                                       <li><Link to={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.f2.l3")}</Link></li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_4">
                                <div className="footer_item_title">
                                    <h1>{t("footer.f3.title")}</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                    <ul>
                                        <li><Link to={PRODUCTION.replace(":id" , 1)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.f3.l1")}</Link></li>
                                        <li><Link to={PRODUCTION.replace(":id" , 2)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.f3.l2")}</Link></li>
                                        <li><Link to={PRODUCTION.replace(":id" , 3)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.f3.l3")}</Link></li>
                                        <li><Link to={PRODUCTION.replace(":id" , 4)} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.f3.l4")}</Link></li>
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