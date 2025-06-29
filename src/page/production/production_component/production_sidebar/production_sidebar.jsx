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
                {pageNames.map((item , index)=>(
                    <Link to={PRODUCTION.replace(":id" , item.id)} key={index} className={`tab_item ${item.id === Number(id) && "active"}`}>
                        <div className="tab_item_line"></div>
                        <h1>{item.page_name}</h1>
                        <KeyboardArrowRightIcon/>
                    </Link>
                ))}
            </div>

            <div className="sidebar_question">
                <div className="sidebar_question_text">
                    <h1>Have Questions?</h1>
                    <p>Our Client Care Managers Are On Call 24/7 To Answer Your Question.</p>
                    <div className="sidebar_question_tell"><PhoneIcon/> +998 99 999 99 99</div>
                </div>
            </div>

            <div className="sidebar_contact">
                <h1>Get in touch</h1>
                <div className="sidebar_contact_item">
                    <FmdGoodOutlinedIcon/>
                    <p>
                        Honey Business Center <br/>
                        24 Fifth st., Los Angeles, <br/>
                        USA
                    </p>

                </div>
                <div className="sidebar_contact_item">
                    <MailOutlineOutlinedIcon/>
                    <p>info@example.com</p>
                </div>
                <div className="sidebar_contact_item">
                    <PhoneIphoneOutlinedIcon/>
                    <p>+998 99 999 99 99</p>
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