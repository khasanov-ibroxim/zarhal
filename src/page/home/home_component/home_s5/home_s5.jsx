import React from 'react';
import "./home_s5.css"
import iconSilk from "@/assets/home/home_s5/iconSilk.svg"
import iconTshirt from "@/assets/home/home_s5/iconTshirt.svg"
import iconWest from "@/assets/home/home_s5/iconWest.svg"
import iconWool from "@/assets/home/home_s5/iconWool.svg"
import h5_img from "@/assets/home/home_s5/DSC03323.jpg"

import icon2 from "@/assets/home/home_s5/return.png"
import icon3 from "@/assets/home/home_s5/quality-product.png"
import icon4 from "@/assets/home/home_s5/product.png"

import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";
import {CONTACT} from "@/utils/consts.jsx";

const HomeS5 = () => {
    const {t} = useTranslation();
    return (
        <div className={"h_5 container"}>
            <div className="h5_title">
                <span className={"subtitle"}>{t("home.s5.subtitle")}</span>
                <h1>{t("home.s5.title")}</h1>
            </div>

            <div className="h5_content">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="h_5_item">
                            <div className="h_5_item_top">
                                <img src={iconSilk}/>
                                <div className="h_5_item_top_element">01</div>
                            </div>
                            <div className="h_5_item_bottom">
                                <h2>{t("home.s5.content.i1.title")}</h2>
                                <p>{t("home.s5.content.i1.desc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="h_5_item">
                            <div className="h_5_item_top">
                                <img src={iconWool}/>
                                <div className="h_5_item_top_element">02</div>
                            </div>
                            <div className="h_5_item_bottom">
                                <h2>{t("home.s5.content.i2.title")}</h2>
                                <p>{t("home.s5.content.i2.desc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="h_5_item">
                            <div className="h_5_item_top">
                                <img src={iconTshirt}/>
                                <div className="h_5_item_top_element">03</div>
                            </div>
                            <div className="h_5_item_bottom">
                                <h2>{t("home.s5.content.i3.title")}</h2>
                                <p>{t("home.s5.content.i3.desc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="h_5_item">
                            <div className="h_5_item_top">
                                <img src={iconWest}/>
                                <div className="h_5_item_top_element">04</div>
                            </div>
                            <div className="h_5_item_bottom">
                                <h2>{t("home.s5.content.i4.title")}</h2>
                                <p>{t("home.s5.content.i4.desc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h5_box">
                <div className="h5_box_left">
                    <div className="h5_box_left_opacity"></div>
                    <img src={h5_img} alt="Zarhal"/>
                    <div className="h5_box_left_item">
                        <h1 dangerouslySetInnerHTML={{__html:t("home.s5.box.title")}}></h1>
                        <a href={CONTACT}>{t("home.s5.box.link")}</a>
                    </div>
                </div>
                <div className="h5_box_right">
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element">
                            <img src={iconWool} alt=""/>
                        </div>
                        <div className="h5_box_right_item_content">
                            <h1>{t("home.s5.box.i1.title")}</h1>
                            <p dangerouslySetInnerHTML={{__html:t("home.s5.box.i1.desc")}}></p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"><img src={icon2} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>{t("home.s5.box.i2.title")}</h1>
                            <p dangerouslySetInnerHTML={{__html: t("home.s5.box.i2.desc")}}></p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"><img src={icon3} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>{t("home.s5.box.i3.title")}</h1>
                            <p dangerouslySetInnerHTML={{__html: t("home.s5.box.i3.desc")}}></p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"><img src={icon4} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>{t("home.s5.box.i4.title")}</h1>
                            <p dangerouslySetInnerHTML={{__html: t("home.s5.box.i4.desc")}}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS5;