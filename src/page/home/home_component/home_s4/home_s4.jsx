import React from 'react';
import "./home_s4.css"
import {Link} from "react-router-dom"
import h4_img from "@/assets/home/home_s4/DSC02973.jpg"

const HomeS4 = () => {
    return (
        <div className={"container"}>
            <div className="h_4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="h4_item">
                            <div className="h4_item_text">
                                <span className="subtitle">Качество & Масштаб</span>
                                <h2>Мы растём вместе с доверием наших партнёров и объёмами производства</h2>
                                <p>Каждое изделие — результат точности, устойчивости и полного контроля на всех этапах</p>
                            </div>
                            <div className="h4_item_box">
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">+10 000 хлопок ежегодно</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line">
                                            <span className={"h4_line_text"}></span>
                                            <span className={"h4_line_bg"}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">+14 000 000  единиц текстиля в год</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" style={{width:"100%"}}>
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"92%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <Link to={"#"}>Производство</Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={h4_img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS4;