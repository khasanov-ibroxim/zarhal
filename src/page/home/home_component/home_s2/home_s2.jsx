import React from 'react';
import "./home_s2.css"
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import izdeliya from "@/assets/home/home_s2/izdeliya.png"


import i1 from "@/assets/home/home_s2/cotton.png"
import i2 from "@/assets/home/home_s2/cotton_kip.png"
import i3 from "@/assets/home/home_s2/thread.png"
import i4 from "@/assets/home/home_s2/sewing.png"
import {useTranslation} from "react-i18next";

const HomeS2 = () => {
    const {t} = useTranslation()
    return (
        <div className={"h_2"}>
            <div className="container h-100">
                <div className="row pt-5 pb-5 d-flex justify-content-center align-items-center h-100">
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={i1} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>12 000 {t("home.s2.ton")}</h2>
                                <p>{t("home.s2.i1")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={i2} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>4 000 {t("home.s2.ton")}</h2>
                                <p>{t("home.s2.i2")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={i3} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>3 500 {t("home.s2.ton")}</h2>
                                <p>{t("home.s2.i3")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={izdeliya} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>32 {t("home.s2.m2")}</h2>
                                <p>{t("home.s2.i4")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={i4} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>10 {t("home.s2.shtuk")} </h2>
                                <p>{t("home.s2.i5")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS2;
