import React from 'react';
import "./about_s6.css"
import {Swiper, SwiperSlide} from "swiper/react";
import img_1 from "@/assets/about/about_s6/DSC03779.jpg"
import img_2 from "@/assets/about/about_s6/DSC03060.jpg"
import img_3 from "@/assets/about/about_s6/DSC03349.jpg"

import l1 from "@/assets/about/about_s6/brand/bosso.png"
import l2 from "@/assets/about/about_s6/brand/bzt.png"
import l3 from "@/assets/about/about_s6/brand/bodimax.png"
import l4 from "@/assets/about/about_s6/brand/ksht.png"
import l5 from "@/assets/about/about_s6/brand/langheinrich.png"
import l6 from "@/assets/about/about_s6/brand/oc.png"
import l7 from "@/assets/about/about_s6/brand/GS.png"


import {Autoplay} from "swiper/modules";
import {useTranslation} from "react-i18next";


const AboutS6 = () => {
    const {t} = useTranslation();
    const about_s6 = [
        {
            item_img: img_1,
            item_name: "James Pamment",
            item_job: "Employee"
        },
        {
            item_img: img_2,
            item_name: "James Pamment",
            item_job: "Employee"
        },
        {
            item_img: img_3,
            item_name: "James Pamment",
            item_job: "Employee"
        },
    ]

    return (
        <div className={"about_s6"}>
            <div className="container">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/gr9ZqjSdhFc?si=7bxF8Xg3Hw3gDeUp"
                        title="YouTube video player" frameBorder="0"
                        style={{borderRadius: "25px", border: "none", outline: "none"}}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="about_brand_title">
                    {t("about.s6.fabric")}
                </div>
                <div className="about_brand_box">
                    <div className="about_s6_brand_row">
                        <img src={l1} alt=""/>
                        <img src={l2} alt=""/>
                        <img src={l3} alt=""/>
                    </div>
                    <div className="about_s6_brand_row">
                        <img src={l4} alt=""/>
                        <img src={l5} alt=""/>
                        <img src={l6} alt=""/>
                        <img src={l7} alt=""/>
                    </div>
                </div>


                <div className="about_s6_title">
                    <div className="subtitle">{t("about.s6.subtitle")}</div>
                    <h1>{t("about.s6.title")}</h1>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{delay: 2000}}
                    modules={[Autoplay]}
                    className={"about_s6_swiper"}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 2.5,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {about_s6.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="about_s6_item">
                                <img src={item.item_img} alt=""/>
                                <div className="about_s6_item_text">
                                    {/*<div className="about_s6_item_content">*/}
                                    {/*    <h1>{item.item_name}</h1>*/}
                                    {/*    <p>{item.item_job}</p>*/}
                                    {/*</div>*/}

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutS6;