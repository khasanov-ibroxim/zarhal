import React from 'react';
import "./about_s2.css"
import right_img from "@/assets/about/about_s2/about_s2_right.jpg"
import left_img from "@/assets/about/about_s2/about_s2_left.jpg"
import CheckIcon from '@mui/icons-material/Check';
import {CONTACT} from "@/utils/consts.jsx";
import {Link} from "react-router-dom"

const AboutS2 = () => {
    return (
        <div className={"about_s2"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about_s2_right">
                            <img src={right_img} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about_s2_left">
                            <div className="about_s2_left_title">
                                <div className="subtitle">Who We Are</div>
                                <h1>An Ultimate Textile Brand in Market since 1970</h1>
                                <p>Indian weavers of designer of furnishing fabrics is a textile manufacturer founded in
                                    1970 and renowned for new and stylish interpretations of natural & organic
                                    fabrics.</p>
                            </div>
                            <div className="about_s2_body">
                                <img src={left_img} alt=""/>
                                <p>Our Fabric Textiles Services Manufacture <br/>
                                    Found In 1996</p>
                            </div>
                            <div className="about_s2_footer">
                                <ul>
                                    <li><CheckIcon/>We check for your current dental situation and decide treatment</li>
                                    <li><CheckIcon/>Our specialists will take care of your smile with dedication</li>
                                    <li><CheckIcon/>We run periodic check-ups to ensure your teeth are good</li>
                                </ul>
                                <div className="about_s2_footer_btns">
                                    <Link to={"#"} className={"about_s2_footer_btn_1"}>View more!</Link>
                                    <Link to={CONTACT} className={"about_s2_footer_btn_2"}>Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS2;