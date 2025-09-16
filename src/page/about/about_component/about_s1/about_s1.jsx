import React from 'react';
import "./about_s1.css"
import header_img from "@/assets/about/about_s1/DSC03588.jpg";
import {ABOUT, HOME} from "@/utils/consts.jsx";
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";

const AboutS1 = () => {
    const {t } = useTranslation();
    return (
        <div>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={header_img} alt="contact"/>
                <div className="about_header_title">
                    <h1>{t("about.header.title")}</h1>
                    <div className="about_header_subtitle">
                        <Link to={HOME}>{t("about.header.link")}</Link>
                        <span></span>
                        <Link to={ABOUT} className={"activeText"}>{t("about.header.title")}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS1;