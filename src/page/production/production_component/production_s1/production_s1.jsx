import React from 'react';
import header_img from "@/assets/about/about_s1/about_header.jpg";
import {Link} from "react-router-dom";
import {ABOUT, HOME} from "@/utils/consts.jsx";

const ProductionS1 = ({item}) => {
    return (
        <div>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={header_img} alt="contact"/>
                <div className="about_header_title">
                    <h1>{item.page_name}</h1>
                    <div className="about_header_subtitle">
                        <Link to={HOME}>Home</Link>
                        <span></span>
                        <Link to={"#"}>Production</Link>
                        <span></span>
                        <Link to={"#"} className={"activeText"}>{item.page_name}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionS1;