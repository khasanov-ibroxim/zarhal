import React from 'react';
import "./home_s1.css"
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckIcon from '@mui/icons-material/Check';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import h_s1_img from "@/assets/home/home_s1/DSC03502.jpg"
import {Link} from "react-router-dom"

import xlopzavod from "@/assets/home/home_s1/cotton.png"
import fabric from "@/assets/home/home_s1/fabric.png"
import eco from "@/assets/home/home_s1/eco-friendly.png"
import yarn from "@/assets/home/home_s1/yarn-ball.png"
import {useTranslation} from "react-i18next";


const HomeS1 = () => {
    const {t} = useTranslation()
    return (
        <div className={"h_s1 container"}>

            <div className="h_s1_top">
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={xlopzavod} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>{t("home.s1.top.i1.title")}</p>
                                <h3>{t("home.s1.top.i1.text")}</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={yarn} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>{t("home.s1.top.i2.title")}</p>
                                <h3>{t("home.s1.top.i2.text")}</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h_s1_top h_s1_top_2">
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={fabric} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>{t("home.s1.top.i3.title")}</p>
                                <h3>{t("home.s1.top.i3.text")}</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={eco} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>{t("home.s1.top.i4.title")}</p>
                                <h3>{t("home.s1.top.i4.text")}</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h_s1_content">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={h_s1_img} alt="Stamp"/>
                    </div>
                    <div className="col-lg-7">
                        <div className="h_s1_content_box">
                            {/*<span className={"subtitle"}>Тканый путь</span>*/}
                            <h2>{t("home.s1.h2")}</h2>
                            <p dangerouslySetInnerHTML={{__html:t("home.s1.p1")}}></p>
                            <p dangerouslySetInnerHTML={{__html:t("home.s1.p2")}}></p>
                            <p dangerouslySetInnerHTML={{__html:t("home.s1.p3")}}></p>

                            <div className="h_s1_content_box_bottom">
                                <div className="h_s1_content_box_bottom_left">
                                    <ul>
                                        <li><CheckIcon/>
                                            {t("home.s1.l1")}
                                        </li>
                                        <li><CheckIcon/>{t("home.s1.l2")}</li>
                                        <li><CheckIcon/>{t("home.s1.l3")}</li>
                                        <li><CheckIcon/>{t("home.s1.l4")}</li>
                                    </ul>
                                    <Link to={"#"} className="h_s1_content_box_bottom_left_link">{t("home.s1.link")}</Link>
                                </div>
                                <div className="h_s1_content_box_bottom_right">
                                    <div className="h_s1_content_box_bottom_right_element"></div>
                                    <div className="h_s1_content_box_bottom_right_element_2">
                                        <HomeOutlinedIcon/>
                                        <h2>20+ </h2>
                                        <p>{t("home.s1.magaz")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeS1;