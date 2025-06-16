import React from 'react';
import "./home_s6.css"
import {Swiper, SwiperSlide} from "swiper/react";
import h6_1 from "@/assets/home/home_s6/h6_1.jpg"
import h6_2 from "@/assets/home/home_s6/h6_2.jpg"
import h6_3 from "@/assets/home/home_s6/h6_3.jpg"
import h6_4 from "@/assets/home/home_s6/h6_4.jpg"
import h6_5 from "@/assets/home/home_s6/h6_5.jpg"
import {Autoplay} from "swiper/modules";
import {Link} from "react-router-dom"
const HomeS6 = () => {
    return (
        <div className={'h_6'}>
            <div className="h_6_content">
                <div className="h5_title">
                    <span className={"subtitle"}>Современные технологии</span>
                    <h1>Надёжность и точность на каждом этапе производства</h1>
                </div>

                <div className="h_6_swiper_box">
                    <Swiper
                        spaceBetween={"20"}
                        slidesPerView={"4"}
                        loop={true}
                        autoplay={{delay:2000}}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="h_6_swiper_item">
                                <img src={h6_1} alt="Zarhal"/>
                                <div className="h_6_swiper_item_content">
                                    <h4>Georgette Fabric</h4>
                                    <p>Hand loom, Machine made</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h_6_swiper_item">
                                <img src={h6_1} alt="Zarhal"/>
                                <div className="h_6_swiper_item_content">
                                    <h4>Georgette Fabric</h4>
                                    <p>Hand loom, Machine made</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h_6_swiper_item">
                                <img src={h6_1} alt="Zarhal"/>
                                <div className="h_6_swiper_item_content">
                                    <h4>Georgette Fabric</h4>
                                    <p>Hand loom, Machine made</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h_6_swiper_item">
                                <img src={h6_1} alt="Zarhal"/>
                                <div className="h_6_swiper_item_content">
                                    <h4>Georgette Fabric</h4>
                                    <p>Hand loom, Machine made</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h_6_swiper_item">
                                <img src={h6_1} alt="Zarhal"/>
                                <div className="h_6_swiper_item_content">
                                    <h4>Georgette Fabric</h4>
                                    <p>Hand loom, Machine made</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="h6_links">
                    <Link className="h6_links_1" to={"#"}>More Projects!</Link>
                    <Link className="h6_links_2" to={"#"}>More Service!</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeS6;