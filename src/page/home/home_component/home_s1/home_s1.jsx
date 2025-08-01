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
            <div className="h_s1_top h_s1_top_2" >
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
                                <h3>Сумка с пользой</h3>
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
                            <span className={"subtitle"}>Тканый путь</span>
                            <h2>Создаём ткани с честностью и заботой</h2>
                            <p>Наша миссия — быть лидером в текстильной отрасли.
                                Мы создаём продукцию полного цикла: от выращивания хлопка до производства высококачественных, экологичных тканей и изделий.
                                Работаем с уважением к клиентам и к природе — честно, надёжно, с душой.
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
                                            <h2>15+ </h2>
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