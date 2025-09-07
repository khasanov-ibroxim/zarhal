import React from 'react';
import "./home_s7.css"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import h7_1 from "@/assets/home/home_s7/IMG_7405.jpg"
import h7_2 from "@/assets/home/home_s7/DSC02794.jpg"
import h7_3 from "@/assets/home/home_s7/DSC02935.jpg"


import {Link} from "react-router-dom"

const HomeS7 = () => {
    return (
        <div className={"h_7 container"}>
            <div className="h7_title">
                <div className="h7_title_left">
                    {/*<span className={"subtitle"}>Контроль на каждом этапе</span>*/}
                    <h1>Контроль на <br/> каждом этапе</h1>
                </div>
                <div className="h7_title_right">
                    <p>Мы обеспечиваем полный производственный цикл — от выращивания хлопка до выпуска готовой
                        продукции, строго соблюдая мировые стандарты качества. <br/>
                        Экологичное производство, инновационные технологии и индивидуальный подход к каждому заказу.
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
                                <h1>Своё сырьё</h1>
                                <p>Мы выращиваем хлопок – это позволяет нам контролировать качество с самых первых этапов.</p>
                                <Link to={"#"}>Подробно</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_2} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <h1>Технологичное производство</h1>
                                <p>Современное оборудование гарантирует точность и стабильность на всех стадиях – от волокна до готовых изделий.</p>
                                <Link to={"#"}>Подробно</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h7_item">
                            <div className="h7_item_top">
                                <img src={h7_3} alt=""/>
                            </div>
                            <div className="h7_item_bottom">
                                <h1>Экологичность — в основе наших принципов.</h1>
                                <p>Ответственное использование ресурсов, снижение отходов и экологичные технологии переработки позволяют нам производить текстиль с заботой о будущем.</p>
                                <Link to={"#"}>Подробно</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeS7;