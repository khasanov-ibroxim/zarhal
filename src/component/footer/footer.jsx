import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from "@/component/navbar/logo-light.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_title">
                    <span className="footer_title_left">
                        <span className="subtitle">READY TO GET STARTED?</span>
                        <h2>Get in touch, or create an account.</h2>
                    </span>
                    <span className="footer_title_right">
                        <Link to={"#"}>Contact Us</Link>
                    </span>
                </div>

                <div className="footer_content">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer_item_1">
                                <img src={logo} alt="Zarhal"/>
                                <p>Fablio industry is operating in the textile market, as the manufacture and trader
                                    from many years.</p>
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
                                    <h1>Get Free Estimate</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                    <a href="#" className={"footer_tell"}>+998 99 304 54 75</a>
                                    <a href="#" className={"footer_email"}>info@zarhalgroup.uz</a>
                                    <p>66 Broklyn Street New York United States of America</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_3">
                                <div className="footer_item_title">
                                    <h1>Textile Services</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                   <ul>
                                       <li><Link to={'#'}>Patch Fabric Works</Link></li>
                                       <li><Link to={'#'}>Garment Stitching</Link></li>
                                       <li><Link to={'#'}>Pattern, Art Making</Link></li>
                                       <li><Link to={'#'}>Stone Work Embroidery</Link></li>
                                       <li><Link to={'#'}>Computerised Embroidery</Link></li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_item_4">
                                <div className="footer_item_title">
                                    <h1>Sign up for newsletter</h1>
                                    <span></span>
                                </div>

                                <div className="footer_item_content">
                                    <Link to={"#"} className={"footer_link_contact"}>Contact</Link>
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