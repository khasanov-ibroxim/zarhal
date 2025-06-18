import React, {useEffect, useState} from 'react';
import "./nabar.css"
import logo from "@/assets/logoZarhal.png"
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CallIcon from '@mui/icons-material/Call';
import {HOME} from "@/utils/consts.jsx";
import {Link, useLocation} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);
    const [scrollDirection, setScrollDirection] = useState(false);
    const [atTop, setAtTop] = useState(true);

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
                                <p>Send email</p>
                                <h4>info@example.com</h4>
                            </div>
                        </div>
                        <div className="nav_top_right_item">
                            <div className="nav_top_right_item_icon"><QueryBuilderIcon/></div>
                            <div className="nav_top_right_item_text">
                                <p>Working Hours</p>
                                <h4>Mon-Sat 09:00 am to 07:00 pm</h4>
                            </div>
                        </div>
                        <div className="nav_top_right_item">
                            <div className="nav_top_right_item_icon"><CallIcon/></div>
                            <div className="nav_top_right_item_text">
                                <p>Have any Questions?</p>
                                <h4>+123 795 9841</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav_container">
                    <div className={`nav_box ${isMobile && !atTop && "active"}`}
                         style={atTop ? {position: "absolute"} : {position: "fixed", top: 0, left: 0}}
                    >
                        <div
                            className={`d-flex justify-content-between align-items-center w-100 ${!atTop && 'container'}`}>
                            <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                                <Link to={HOME}
                                      className={`nav_menu_item ${location.pathname === HOME && "activeLink"}`}>
                                    Home
                                    <span></span>
                                </Link>
                                <div className="nav_menu_item">
                                    Page
                                    <span></span>
                                </div>
                                <div className="nav_menu_item">
                                    Services
                                    <span></span>
                                </div>
                                <div className="nav_menu_item">
                                    Projects
                                    <span></span>
                                </div>
                                <div className="nav_menu_item">
                                    Blog
                                    <span></span></div>
                                <div className="nav_menu_item">
                                    Contact us
                                    <span></span>
                                </div>
                            </div>
                            <div className="hidden_logo" style={isMobile ? { display: "flex" } : { display: "none" }}>
                                <img src={logo} alt=""/>
                            </div>
                            <div className="nav_end">
                                <Link to={"#"} style={isMobile ? { display: "none" } : { display: "flex" }}>Get Quote</Link>

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