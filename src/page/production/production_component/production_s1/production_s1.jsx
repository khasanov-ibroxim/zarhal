import React from 'react';
import {Link} from "react-router-dom";
import {ABOUT, HOME} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const ProductionS1 = ({item}) => {
    const {t} = useTranslation();
    return (
        <div>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={item.header_img} alt="contact"/>
                <div className="about_header_title">
                    <h1>{item.page_title}</h1>
                    <div className="about_header_subtitle">
                        <Link to={HOME}>{t("navbar.home")}</Link>
                        <span></span>
                        <Link to={"#"}>{t("navbar.production")}</Link>
                        <span></span>
                        <Link to={"#"} className={"activeText"}>{item.page_name}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionS1;