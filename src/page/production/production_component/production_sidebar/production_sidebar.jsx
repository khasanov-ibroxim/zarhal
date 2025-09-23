import React from 'react';
import "./production_sidebar.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PhoneIcon from '@mui/icons-material/Phone';

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import {Production_db} from "@/page/production/production_db.jsx";
import {useParams} from "react-router-dom";
import {PRODUCTION} from "@/utils/consts.jsx";
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";


const ProductionSidebar = () => {
    const {id} = useParams();
    const {t } = useTranslation();
    const pageNames = Production_db(t)
        .map(item => ({
            id: item.id,
            page_name: item.page_name
        }));


    return (
        <div>
            <div className="sidebar_tabs">
                {pageNames.map((item, index) => (
                    <Link to={PRODUCTION.replace(":id", item.id)} key={index}
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          className={`tab_item ${item.id === Number(id) && "active"}`}>
                        <div className="tab_item_line"></div>
                        <h1>{item.page_name}</h1>
                        <KeyboardArrowRightIcon/>
                    </Link>
                ))}
            </div>

            <div className="sidebar_question">
                <div className="sidebar_question_img"></div>
                <div className="sidebar_question_opacity"></div>
                <div className="sidebar_question_text">
                    <h1>{t("production.sidebar.box.title")}</h1>
                    <p dangerouslySetInnerHTML={{__html:t("production.sidebar.box.p")}}></p>

                </div>
            </div>

            <div className="sidebar_contact">
                <h1>{t("production.sidebar.contact")}</h1>
                <div className="sidebar_contact_item">
                    <FmdGoodOutlinedIcon/>
                    <p>{t("production.sidebar.address")}</p>

                </div>
                <div className="sidebar_contact_item">
                    <MailOutlineOutlinedIcon/>
                    <p>info@zarhalgroup.uz</p>
                </div>
                <div className="sidebar_contact_item">
                    <PhoneIphoneOutlinedIcon/>
                    <p><a href="tel:+998652220707">+998652220707</a> <br/>
                        <a href="tel:+998772729922">+998772729922</a></p>
                </div>
                <div className="sidebar_contact_item">
                    <AccessAlarmOutlinedIcon/>
                    <p>{t("production.sidebar.time")}</p>
                </div>
                <div className="sidebar_contact_line"></div>
            </div>
        </div>
    );
};

export default ProductionSidebar;