import React from 'react';
import "./home_s3.css"
import {Link} from "react-router-dom"
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import Home_s4 from "@/page/home/home_component/home_s4/home_s4.jsx";
import siryo from "@/assets/home/home_s3/siryo.png"
import volokna from "@/assets/home/home_s3/volokna.png"
import product from "@/assets/home/home_s3/product.png"
import proizvodstva from "@/assets/home/home_s3/proizvodstva.png"

import i1 from "@/assets/home/home_s3/cotton1.png"
import i2 from "@/assets/home/home_s3/cotton.png"
import i3 from "@/assets/home/home_s3/yarn.png"
import {useTranslation} from "react-i18next";
import {CONTACT} from "@/utils/consts.jsx";

const HomeS3 = () => {
    const {t} = useTranslation()
    return (
        <div className={"h_3"}>
            <div className="container">
                <div className="h3_title">
                    <div className="h3_title_left">
                        <span className={"subtitle"}>{t("home.s3.subtitle")}</span>
                        <h2 dangerouslySetInnerHTML={{__html:t("home.s3.title")}}></h2>
                    </div>
                    <div className="h3_title_right">
                        <a href={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("home.s3.link")}</a>
                    </div>
                </div>

                <div className="h3_container">
                    <div className="row justify-content-center d-flex">
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={i1} alt={"zarhal siryo"}/>
                                <h2>{t("home.s3.i1.h2")}</h2>
                                <p>{t("home.s3.i1.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={i2} alt={"zarhal siryo"}/>
                                <h2>{t("home.s3.i2.h2")}</h2>
                                <p>{t("home.s3.i2.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={i3} alt={"zarhal siryo"}/>
                                <h2>{t("home.s3.i3.h2")}</h2>
                                <p>{t("home.s3.i3.p")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="col-lg-3  mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={proizvodstva} alt={"zarhal siryo"}/>
                                <h2>{t("home.s3.i4.h2")}</h2>
                                <p>{t("home.s3.i4.p")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={product} alt={"zarhal siryo"}/>
                                <h2>{t("home.s3.i5.h2")}</h2>
                                <p>{t("home.s3.i5.p")}</p>
                                <a href={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("home.s3.i_link")}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Home_s4/>
            </div>
        </div>
    );
};

export default HomeS3;