import React, {useEffect, useState} from 'react';
import "./nabar.css"
import logo from "@/assets/logoZarhal.png"
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CallIcon from '@mui/icons-material/Call';
import {ABOUT, CONTACT, HOME, PRODUCTION} from "@/utils/consts.jsx";
import {Link, useLocation} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Production_db} from "@/page/production/production_db.jsx";

const Navbar = () => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const [scrollDirection, setScrollDirection] = useState(false);
    const [atTop, setAtTop] = useState(true);


    const production_pages = Production_db
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
                                <p>Отправить письмо</p>
                                <h4>zarhalgroup.uz@gmail.com</h4>
                            </div>
                        </div>
                        <div className="nav_top_right_item">
                            <div className="nav_top_right_item_icon"><QueryBuilderIcon/></div>
                            <div className="nav_top_right_item_text">
                                <p>Часы работы</p>
                                <h4>Пн-Сб с 09:00 до 19:00</h4>
                            </div>
                        </div>
                        <div className="nav_top_right_item">
                            <div className="nav_top_right_item_icon"><CallIcon/></div>
                            <div className="nav_top_right_item_text">
                                <p>Есть вопросы?</p>
                                <h4>+998652220707</h4>
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
                                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                      className={`nav_menu_item ${location.pathname === HOME && "activeLink"}`}>
                                    Главная
                                    <span></span>
                                </Link>
                                <Link
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    to={ABOUT} className="nav_menu_item">
                                    О нас
                                    <span></span>
                                </Link>
                                <div className="nav_menu_item submenu">
                                    производство
                                    <span></span>
                                    <ul className="nav_menu_subitem_box">
                                        {production_pages.map((itemProduction , index)=>(
                                            <li><Link
                                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                                to={PRODUCTION.replace(":id" , itemProduction.id)}>{itemProduction.page_name}</Link></li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to={CONTACT}
                                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                      className="nav_menu_item">
                                    Контакты
                                    <span></span>
                                </Link>
                            </div>
                            <div className="hidden_logo" style={isMobile ? { display: "flex" } : { display: "none" }}>
                                <img src={logo} alt=""/>
                            </div>
                            <div className="nav_end">
                                <Link to={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={isMobile ? { display: "none" } : { display: "flex" }}>Свяжитесь</Link>

                                <div className="navburger" onClick={toggleMenu}>
                                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
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