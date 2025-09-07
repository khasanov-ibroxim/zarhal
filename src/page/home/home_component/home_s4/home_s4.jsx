import React from 'react';
import "./home_s4.css"
import {Link} from "react-router-dom"
import h4_img from "@/assets/home/home_s4/DSC03552.jpg"

const HomeS4 = () => {
    return (
        <div className={"container"}>
            <div className="h_4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="h4_item">
                            <div className="h4_item_text">
                                <span className="subtitle">Качество & Масштаб</span>
                                <h2>Мы растём вместе с доверием наших партнёров и устойчивым расширением производства — сохраняя качество, на котором строятся долгосрочные отношения.</h2>
                                <p>Каждое изделие — результат точности, устойчивости и полного контроля на всех этапах</p>
                            </div>
                            <div className="h4_item_box">
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">12 000 тн – хлопкового сырца</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line">
                                            <span className={"h4_line_text"}></span>
                                            <span className={"h4_line_bg"}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">4 000 тн хлопкового волокна</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" style={{width:"100%"}}>
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"80%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">3 500 тн  пряжи</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" style={{width:"100%"}}>
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"90%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">32 млн м2  ткань</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" style={{width:"100%"}}>
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"100%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">10 млн штук  готовых швейных изделий</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" style={{width:"100%"}}>
                                            <span className={"h4_line_text"} ></span>
                                            <span className={"h4_line_bg"} style={{width:"100%"}}></span>
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