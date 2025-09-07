import React from 'react';
import "./home_s1.css"
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckIcon from '@mui/icons-material/Check';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import h_s1_img from "@/assets/home/home_s1/DSC03502.jpg"
import {Link} from "react-router-dom"

import xlopzavod from "@/assets/home/home_s1/cotton.png"
import fabric from "@/assets/home/home_s1/fabric.png"
import eco from "@/assets/home/home_s1/eco-friendly.png"
import yarn from "@/assets/home/home_s1/yarn-ball.png"


const HomeS1 = () => {
    return (
        <div className={"h_s1 container"}>

            <div className="h_s1_top">
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={xlopzavod} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>Хлопзавод</p>
                                <h3> Чисто. Надёжно. Инновационно.</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={yarn} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>Пряжа</p>
                                <h3>Основа будущей ткани</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h_s1_top h_s1_top_2">
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={fabric} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>Ткани</p>
                                <h3>Комфорт начинается здесь</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <img src={eco} alt=""/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>Эко сумка</p>
                                <h3>Готовое изделие, в которое вложены душа и ответственность.</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h_s1_content">
                <div className="row">
                    <div className="col-lg-5">
                        <img src={h_s1_img} alt="Stamp"/>
                    </div>
                    <div className="col-lg-7">
                        <div className="h_s1_content_box">
                            {/*<span className={"subtitle"}>Тканый путь</span>*/}
                            <h2>Тканый Путь — от земли к душе</h2>
                            <p>Мы — компания полного текстильного цикла, которая объединяет традиции и инновации. <br/>
                                Наша история начинается с хлопкового поля и продолжается в готовых тканях и изделиях,
                                созданных с уважением к природе, человеку и будущему. <br/>
                                Всё, что мы делаем, пронизано честностью, вниманием к деталям и осознанным подходом. <br/>
                                Мы верим, что ткань — это больше, чем материал. Это носитель смысла, отражение ценностей
                                и заботы.
                            </p>
                            <p>Наша миссия</p>
                            <p>Создавать экологичные и высококачественные ткани и изделия, проходящие полный путь от
                                выращивания сырья до готового продукта. <br/>
                                Мы стремимся быть лидером устойчивого текстиля в мировом рынке, объединяя качество,
                                прозрачность и ответственность.
                            </p>

                            <div className="h_s1_content_box_bottom">
                                <div className="h_s1_content_box_bottom_left">
                                    <ul>
                                        <li><CheckIcon/>
                                            Чистота. Прочность. Истоки.
                                        </li>
                                        <li><CheckIcon/>Точность. Гибкость. Форма.</li>
                                        <li><CheckIcon/>Комфорт. Долговечность. Стиль.</li>
                                        <li><CheckIcon/>Устойчивость. Осознанность. Дизайн.</li>
                                    </ul>
                                    <Link to={"#"} className="h_s1_content_box_bottom_left_link">Свяжитесь</Link>
                                </div>
                                <div className="h_s1_content_box_bottom_right">
                                    <div className="h_s1_content_box_bottom_right_element"></div>
                                    <div className="h_s1_content_box_bottom_right_element_2">
                                        <HomeOutlinedIcon/>
                                        <h2>20+ </h2>
                                        <p>лет на рынке</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeS1;