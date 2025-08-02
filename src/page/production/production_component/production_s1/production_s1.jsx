import React from 'react';
import {Link} from "react-router-dom";
import {ABOUT, HOME} from "@/utils/consts.jsx";

const ProductionS1 = ({item}) => {
    return (
        <div>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={item.header_img} alt="contact"/>
                <div className="about_header_title">
                    <h1>{item.page_title}</h1>
                    <div className="about_header_subtitle">
                        <Link to={HOME}>Главная</Link>
                        <span></span>
                        <Link to={"#"}>Продукция</Link>
                        <span></span>
                        <Link to={"#"} className={"activeText"}>{item.page_name}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionS1;