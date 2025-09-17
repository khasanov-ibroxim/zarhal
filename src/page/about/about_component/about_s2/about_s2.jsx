import React from 'react';
import "./about_s2.css"
import right_img from "@/assets/about/about_s2/DSC03335.jpg"
import left_img from "@/assets/about/about_s2/DSC03520.jpg"
import CheckIcon from '@mui/icons-material/Check';
import {CONTACT} from "@/utils/consts.jsx";
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";

const AboutS2 = () => {
    const {t} = useTranslation();
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
                                {/*<div className="subtitle">Высокое качество</div>*/}
                                <h1 dangerouslySetInnerHTML={{__html:t("about.s2.title")}}></h1>
                                <p dangerouslySetInnerHTML={{__html:t("about.s2.title_desc")}}></p>
                            </div>
                            <div className="about_s2_body">
                                <img src={left_img} alt=""/>
                                <p dangerouslySetInnerHTML={{__html:t("about.s2.box_title")}}></p>
                            </div>
                            <div className="about_s2_footer">
                                <ul>
                                    <li><CheckIcon/>
                                        <div dangerouslySetInnerHTML={{__html: t("about.s2.p1")}}>


                                        </div>

                                    </li>
                                    <li><CheckIcon/>
                                        <div dangerouslySetInnerHTML={{__html:t("about.s2.p2")}}></div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div dangerouslySetInnerHTML={{__html:t("about.s2.p3")}}></div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div dangerouslySetInnerHTML={{__html:t("about.s2.p4")}}></div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div dangerouslySetInnerHTML={{__html:t("about.s2.p5")}}></div>
                                    </li>
                                </ul>
                                <p>{t("about.s2.desc")}</p>
                                <div className="about_s2_footer_btns">
                                    <Link to={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={"about_s2_footer_btn_1"}>{t("about.s2.link1")}</Link>
                                    <Link to={CONTACT}
                                          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                          className={"about_s2_footer_btn_2"}>{t("about.s2.link2")}</Link>
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