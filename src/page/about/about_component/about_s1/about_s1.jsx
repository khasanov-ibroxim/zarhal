import React from 'react';
import "./about_s1.css"
import header_img from "@/assets/about/about_s1/about_header.jpg";
import {ABOUT, HOME} from "@/utils/consts.jsx";
import {Link} from "react-router-dom"

const AboutS1 = () => {
    return (
        <div>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={header_img} alt="contact"/>
                <div className="about_header_title">
                    <h1>About Us</h1>
                    <div className="about_header_subtitle">
                        <Link to={HOME}>Home</Link>
                        <span></span>
                        <Link to={ABOUT} className={"activeText"}>About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS1;