import React from 'react';
import "./home_s7.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import h7_1 from "@/assets/home/home_s7/IMG_7405.jpg"
import h7_2 from "@/assets/home/home_s7/DSC02794.jpg"
import h7_3 from "@/assets/home/home_s7/DSC02935.jpg"


import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";
import {CONTACT} from "@/utils/consts.jsx";

const HomeS7 = () => {
    const {t} = useTranslation();
    return (
        <div className={"h_7 container"}>
            <div className="h7_title">
                <div className="h7_title_left">
                    {/*<span className={"subtitle"}>Контроль на каждом этапе</span>*/}
                    <h1 dangerouslySetInnerHTML={{__html:t("home.s7.title")}}></h1>
                </div>
                <div className="h7_title_right">
                    <p dangerouslySetInnerHTML={{__html:t("home.s7.p")}}></p>
                </div>
            </div>

            <div className="h_7_content">
                <Swiper className={"h7_swiper"}
                        slidesPerView={3}
                        spaceBetween={20}
                        modules={[Autoplay]}
                        autoplay={{delay: 2000}}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                >
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_1} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <h1>{t("home.s7.i1.title")}</h1>
                                <p>{t("home.s7.i1.desc")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_2} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <h1>{t("home.s7.i2.title")}</h1>
                                <p>{t("home.s7.i2.desc")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_3} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <h1>{t("home.s7.i3.title")}</h1>
                                <p>{t("home.s7.i3.desc")}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeS7;