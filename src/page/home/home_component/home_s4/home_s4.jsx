import React from 'react';
import "./home_s4.css"
import {Link} from "react-router-dom"
import h4_img from "@/assets/home/home_s4/portfolio-3.jpg"

const HomeS4 = () => {
    return (
        <div className={"container"}>
            <div className="h_4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="h4_item">
                            <div className="h4_item_text">
                                <span className="subtitle">WELL DESIGNED</span>
                                <h2>We Provide Clothes More Than Stitched Fabric</h2>
                                <p>Adhering to the business principle of mutual benefits, we have had a good reputation
                                    among our customers because of our perfect services.
                                </p>
                            </div>
                            <div className="h4_item_box">
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">Textile</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line">
                                            <span className={"h4_line_text"}>90%</span>
                                            <span className={"h4_line_bg"}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h4_item_box_item">
                                    <div className="h4_item_box_item_top">Design</div>
                                    <div className="h4_item_box_item_line">
                                        <div className="h4_line" style={{width:"100%"}}>
                                            <span className={"h4_line_text"} >92%</span>
                                            <span className={"h4_line_bg"} style={{width:"92%"}}></span>
                                        </div>
                                    </div>
                                </div>
                                <Link to={"#"}>Read more!</Link>
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