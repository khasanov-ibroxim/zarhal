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

const HomeS5 = () => {
    return (
        <div className={"h_5 container"}>
            <div className="h5_title">
                <span className={"subtitle"}>Проект будущего</span>
                <h1>Чем важен полный цикл текстиля для Узбекистана сегодня?</h1>
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
                                <h2>Полный цикл</h2>
                                <p>Производство 60 млн м² суровых и крашенных тканей в год.</p>
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
                                <h2>Экспортный фокус</h2>
                                <p>Современные станки — ткани до 420 см для мирового рынка.</p>
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
                                <h2>Готовый продукт</h2>
                                <p>10 млн текстильных изделий ежегодно.</p>
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
                                <h2>Новые рабочие места</h2>
                                <p>Более 1000 человек заняты в регионах.</p>
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
                        <h1>Наше оборудование — ключ к качеству и эффективности на каждом этапе</h1>
                        <Link to={"#"}>Свяжитесь</Link>
                    </div>
                </div>
                <div className="h5_box_right">
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element">
                            <img src={iconWool} alt=""/>
                        </div>
                        <div className="h5_box_right_item_content">
                            <h1>Для агро-обработки</h1>
                            <p> John Deere, New Holland используется для агро-обработки хлопка — от посева до сбора урожая.</p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"><img src={icon2} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>Для переработки и пряжи</h1>
                            <p>Оборудование от Trutzschler и Rieter обеспечивает первичную очистку и прядение с высокой точностью и стабильностью. Это залог однородной, прочной нити без дефектов.</p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"><img src={icon3} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>Для качества и жаккарда</h1>
                            <p>Станки Picanol, Itema и Staubli позволяют выпускать сложные узорчатые, жаккардовые и технические ткани. Высокая скорость и гибкость преимущество для крупных заказов.</p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"><img src={icon4} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>Для отделки</h1>
                            <p>Оборудование Beninger, Monforst, Ostoff, Ramisch Guarneri отвечает за финишную обработку и усиление текстиля. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS5;