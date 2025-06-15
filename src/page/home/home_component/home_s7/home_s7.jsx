import React from 'react';
import "./home_s7.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import h7_1 from "@/assets/home/home_s6/h6_1.jpg"
import h7_2 from "@/assets/home/home_s6/h6_2.jpg"
import h7_3 from "@/assets/home/home_s6/h6_3.jpg"
import h7_4 from "@/assets/home/home_s6/h6_4.jpg"
import h7_5 from "@/assets/home/home_s6/h6_5.jpg"

import {Link} from "react-router-dom"

const HomeS7 = () => {
    return (
        <div className={"h_7 container"}>
            <div className="h7_title">
                <div className="h7_title_left">
                    <span className={"subtitle"}>NEW BLOGS</span>
                    <h1>Latest News And Articles!</h1>
                </div>
                <div className="h7_title_right">
                    <p>
                        Since more than 40 years, FABLIO is operating in the textile market manufacture and trader. As
                        years go by, the range of produced textiles has been increased.
                    </p>
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
                                <div className="h7_item_bottom_element">
                                   <span>15</span>
                                   <span>Feb</span>
                                </div>
                                <h1>One stop solution for textiles fabrics materials</h1>
                                <p> Purus non enim praesent elementum facilisis. Eget mi proin sed libero enim sed
                                    faucib... </p>
                                <Link to={"#"}>Read more</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_1} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <div className="h7_item_bottom_element">
                                   <span>15</span>
                                   <span>Feb</span>
                                </div>
                                <h1>One stop solution for textiles fabrics materials</h1>
                                <p> Purus non enim praesent elementum facilisis. Eget mi proin sed libero enim sed
                                    faucib... </p>
                                <Link to={"#"}>Read more</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_1} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <div className="h7_item_bottom_element">
                                   <span>15</span>
                                   <span>Feb</span>
                                </div>
                                <h1>One stop solution for textiles fabrics materials</h1>
                                <p> Purus non enim praesent elementum facilisis. Eget mi proin sed libero enim sed
                                    faucib... </p>
                                <Link to={"#"}>Read more</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_1} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <div className="h7_item_bottom_element">
                                   <span>15</span>
                                   <span>Feb</span>
                                </div>
                                <h1>One stop solution for textiles fabrics materials</h1>
                                <p> Purus non enim praesent elementum facilisis. Eget mi proin sed libero enim sed
                                    faucib... </p>
                                <Link to={"#"}>Read more</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_1} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <div className="h7_item_bottom_element">
                                   <span>15</span>
                                   <span>Feb</span>
                                </div>
                                <h1>One stop solution for textiles fabrics materials</h1>
                                <p> Purus non enim praesent elementum facilisis. Eget mi proin sed libero enim sed
                                    faucib... </p>
                                <Link to={"#"}>Read more</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_1} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <div className="h7_item_bottom_element">
                                   <span>15</span>
                                   <span>Feb</span>
                                </div>
                                <h1>One stop solution for textiles fabrics materials</h1>
                                <p> Purus non enim praesent elementum facilisis. Eget mi proin sed libero enim sed
                                    faucib... </p>
                                <Link to={"#"}>Read more</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeS7;