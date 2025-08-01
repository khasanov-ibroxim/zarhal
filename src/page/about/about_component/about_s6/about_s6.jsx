import React from 'react';
import "./about_s6.css"
import {Swiper, SwiperSlide} from "swiper/react";
import img_1 from "@/assets/about/about_s6/DSC03779.jpg"
import img_2 from "@/assets/about/about_s6/DSC03060.jpg"
import img_3 from "@/assets/about/about_s6/DSC03349.jpg"

import {Autoplay} from "swiper/modules";


const AboutS6 = () => {

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
                <div className="about_s6_title">
                    <div className="subtitle">Прогресс</div>
                    <h1>Наша команда в работе!</h1>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{delay:2000}}
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