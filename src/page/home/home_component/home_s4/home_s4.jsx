import React from 'react';
import "./home_s4.css"
import {Link} from "react-router-dom"
import h4_img from "@/assets/home/home_s4/DSC03552.jpg"
import {useTranslation} from "react-i18next";
import {PRODUCTION} from "@/utils/consts.jsx";

const HomeS4 = () => {
    const {t} = useTranslation()
    return (
        <div className={"container"}>
            <div className="h_4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="h4_item">
                            <div className="h4_item_text">
                                <span className="subtitle">{t("home.s4.subtitle")}</span>
                                <h2>{t("home.s4.title")}</h2>
                                <p>{t("home.s4.p")}</p>
                            </div>
                            <div className="h4_item_box">
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">12 000 {t("home.s4.tn")} {t("home.s4.i1")}</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line">
                                            <span className={"h4_line_text"}></span>
                                            <span className={"h4_line_bg"}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">4 000 {t("home.s4.tn")} {t("home.s4.i2")}</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" >
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"80%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">3 500 {t("home.s4.tn")}  {t("home.s4.i3")}</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" >
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"90%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">32 {t("home.s4.m2")}  {t("home.s4.i4")}</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" >
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"100%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">10 {t("home.s4.shtuk")}  {t("home.s4.i5")}</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" >
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"100%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <Link to={PRODUCTION.replace(":id" , 1)}
                                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                >{t("home.s4.link")}</Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={h4_img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS4;