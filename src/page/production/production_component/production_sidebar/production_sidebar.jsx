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


const ProductionSidebar = () => {
    const {id} = useParams();

    const pageNames = Production_db
        .filter(item => item.id && item.page_name)
        .map(item => ({
            id: item.id,
            page_name: item.page_name
        }));


    return (
        <div>
            <div className="sidebar_tabs">
                {pageNames.map((item, index) => (
                    <Link to={PRODUCTION.replace(":id", item.id)} key={index}
                          className={`tab_item ${item.id === Number(id) && "active"}`}>
                        <div className="tab_item_line"></div>
                        <h1>{item.page_name}</h1>
                        <KeyboardArrowRightIcon/>
                    </Link>
                ))}
            </div>

            <div className="sidebar_question">
                <div className="sidebar_question_text">
                    <h1>Как нас найти?</h1>
                    <p>Наше производство удобно расположено — <br/> к нам легко добраться.
                    </p>
                    <div className="sidebar_question_tell"><PhoneIcon/> +998 65 222 07 07</div>
                </div>
            </div>

            <div className="sidebar_contact">
                <h1>Контакты</h1>
                <div className="sidebar_contact_item">
                    <FmdGoodOutlinedIcon/>
                    <p>
                        Республика Узбекистан, г.Бухара, у.Алпамыш 331
                    </p>

                </div>
                <div className="sidebar_contact_item">
                    <MailOutlineOutlinedIcon/>
                    <p>zarhalgroup.uz@gmail.com</p>
                </div>
                <div className="sidebar_contact_item">
                    <PhoneIphoneOutlinedIcon/>
                    <p>+998 65 222 07 07</p>
                </div>
                <div className="sidebar_contact_item">
                    <AccessAlarmOutlinedIcon/>
                    <p>Mon to Sat - 9:00am to 6:00pm
                        (Sunday Closed)</p>
                </div>
                <div className="sidebar_contact_line"></div>
            </div>
        </div>
    );
};

export default ProductionSidebar;