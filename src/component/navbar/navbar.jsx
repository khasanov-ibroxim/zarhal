import React, {useEffect, useState} from 'react';
import "./nabar.css"
import logo from "@/assets/logoZarhal.png"
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CallIcon from '@mui/icons-material/Call';
import {ABOUT, BLOG, CONTACT, HOME, PRODUCTION} from "@/utils/consts.jsx";
import {Link, useLocation} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Production_db} from "@/page/production/production_db.jsx";
import {useLanguage} from "@/utils/lang/LangContext.jsx";
import {useTranslation} from "react-i18next";
import {Dropdown, Space} from "antd";
import {languages} from "@/utils/lang/langs.jsx";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navbar = () => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const [scrollDirection, setScrollDirection] = useState(false);
    const [atTop, setAtTop] = useState(true);

    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();

    const production_pages = Production_db(t)
        .map(item => ({
            id: item.id,
            page_name: item.page_name
        }));

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 800px)');
        windowMatch.addEventListener('change', handleResize);
        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 90) {
                setScrollDirection(false);
            } else {
                setScrollDirection(true);
            }
            setAtTop(currentScrollY < window.innerHeight); // 100vh dan kichik bo‘lsa true
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav>
            <div className="container">
                <div className="navbar_top">
                    <div className="nav_logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="nav_top_right">
                        <div className="nav_top_right_item">
                            <div className="nav_top_right_item_icon"><EmailIcon/></div>
                            <div className="nav_top_right_item_text">
                                <p>{t("navbar.nav_top.mail")}</p>
                                <h4>info@zarhalgroup.uz</h4>
                            </div>
                        </div>
                        <div className="nav_top_right_item">
                            <div className="nav_top_right_item_icon"><QueryBuilderIcon/></div>
                            <div className="nav_top_right_item_text">
                                <p>{t("navbar.nav_top.time")}</p>
                                <h4>{t("navbar.nav_top.time_d")}</h4>
                            </div>
                        </div>
                        <div className="nav_top_right_item">
                            <div className="nav_top_right_item_icon"><CallIcon/></div>
                            <div className="nav_top_right_item_text">
                                <p>{t("navbar.nav_top.tell")}</p>
                                <h4>+998652220707</h4>
                                <h4>+998772729922</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav_container">
                    <div className={`nav_box ${isMobile && !atTop && "active"}`}
                         style={atTop ? {position: "absolute"} : {position: "fixed", top: 0, left: 0 , width:"100%" , borderRadius:"0"}}
                    >
                        <div
                            className={`d-flex justify-content-between align-items-center w-100 ${!atTop && 'container'}`}>
                            <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                                <Link to={HOME}
                                      onClick={() => {
                                          window.scrollTo({top: 0, behavior: "smooth"})
                                          setIsMenuOpen(false)
                                      }}
                                      className={`nav_menu_item ${location.pathname === HOME && "activeLink"}`}>
                                    {t("navbar.home")}
                                    <span></span>
                                </Link>
                                <Link
                                    onClick={() => {
                                        window.scrollTo({top: 0, behavior: "smooth"})
                                        setIsMenuOpen(false)
                                    }}
                                    to={ABOUT} className="nav_menu_item">
                                    {t("navbar.about")}
                                    <span></span>
                                </Link>
                                <div className="nav_menu_item submenu">
                                    {t("navbar.production")}
                                    <span></span>
                                    <ul className="nav_menu_subitem_box">
                                        {production_pages.map((itemProduction, index) => (
                                            <li><Link
                                                onClick={() => {
                                                    window.scrollTo({top: 0, behavior: "smooth"})
                                                    setIsMenuOpen(false)
                                                }}
                                                to={PRODUCTION.replace(":id", itemProduction.id)}>{itemProduction.page_name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to={CONTACT}
                                      onClick={() => {
                                          window.scrollTo({top: 0, behavior: "smooth"})
                                          setIsMenuOpen(false)
                                      }}
                                      className="nav_menu_item">
                                    {t("navbar.contact")}
                                    <span></span>
                                </Link>
                                <Link to={BLOG}
                                      onClick={() => {
                                          window.scrollTo({top: 0, behavior: "smooth"})
                                          setIsMenuOpen(false)
                                      }}
                                      className="nav_menu_item">
                                    {t("blog.page_title")}
                                    <span></span>
                                </Link>
                                <div className="lang_nav nav_menu_item submenu">
                                    {selectedLanguage?.label && (<>{selectedLanguage?.label} <KeyboardArrowDownIcon/></>)}
                                    <span></span>
                                    <ul className="nav_menu_subitem_box roboto" >
                                        {languages.map((item, index) => (
                                            <li><div
                                                onClick={() => {
                                                    handleLanguageChange(item)
                                                    setIsMenuOpen(false)
                                                } }
                                                >{item.label}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden_logo" style={isMobile ? {display: "flex"} : {display: "none"}}>
                                <img src={logo} alt=""/>
                            </div>

                            <div className="nav_end" style={{display: "flex", gap: "15px"}}>
                                <Link to={CONTACT} onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                      style={isMobile ? {display: "none"} : {display: "flex"}}>{t("navbar.btn")}</Link>

                                <div className="navburger" onClick={toggleMenu}>
                                    {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;