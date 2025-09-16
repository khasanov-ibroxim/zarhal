import React from 'react';
import "./about_s5.css"
import r_img from "@/assets/about/about_s5/DSC03091.jpg"
import {useTranslation} from "react-i18next";

const AboutS5 = () => {
    const {t} = useTranslation();
    return (
        <div className={"about_s5"}>
            <div className="about_s5_left ">

                <div className="about_s5_left_title">
                    <div className="subtitle">{t("about.s5.subtitle")}</div>
                    <h1>{t("about.s5.title")}</h1>
                    <p>{t("about.s5.p")}</p>
                </div>

            </div>
            <div className="about_s5_right ">
                <img src={r_img} alt=""/>
            </div>
        </div>
    );
};

export default AboutS5;