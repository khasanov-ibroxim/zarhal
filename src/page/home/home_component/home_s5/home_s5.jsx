import React from 'react';
import "./home_s5.css"
import iconSilk from "@/assets/home/home_s5/iconSilk.svg"
import iconTshirt from "@/assets/home/home_s5/iconTshirt.svg"
import iconWest from "@/assets/home/home_s5/iconWest.svg"
import iconWool from "@/assets/home/home_s5/iconWool.svg"
import h5_img from "@/assets/home/home_s5/col-img-02.png"

import {Link} from "react-router-dom"

const HomeS5 = () => {
    return (
        <div className={"h_5 container"}>
            <div className="h5_title">
                <span className={"subtitle"}>OUR WORKING PROCESS</span>
                <h1>Simple Step To Get Textile?</h1>
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
                                <h2>Production of Fabric</h2>
                                <p>We Produce the best quality of fabric covered all aspects</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="h_5_item">
                            <div className="h_5_item_top">
                                <img src={iconWool}/>
                                <div className="h_5_item_top_element">01</div>
                            </div>
                            <div className="h_5_item_bottom">
                                <h2>Exportation Globally</h2>
                                <p>We not only export locally but all over the world</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="h_5_item">
                            <div className="h_5_item_top">
                                <img src={iconWest}/>
                                <div className="h_5_item_top_element">01</div>
                            </div>
                            <div className="h_5_item_bottom">
                                <h2>Digital Shop Available</h2>
                                <p>Showcased digitally our all the products for best reach</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="h_5_item">
                            <div className="h_5_item_top">
                                <img src={iconTshirt}/>
                                <div className="h_5_item_top_element">01</div>
                            </div>
                            <div className="h_5_item_bottom">
                                <h2>Great Client Support</h2>
                                <p>our front desk is available for clients for 24*7!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h5_box">
                <div className="h5_box_left">
                    <img src={h5_img} alt="Zarhal"/>
                    <div className="h5_box_left_item">
                        <h1>Fablio is Operating In The Textile <br/>
                            Market Manufacture</h1>
                        <Link to={"#"}>More service</Link>
                    </div>
                </div>
                <div className="h5_box_right">
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element">
                            <img src={iconWool} alt=""/>
                        </div>
                        <div className="h5_box_right_item_content">
                            <h1>Fabric Products & Accessories</h1>
                            <p>We have built a strong alliance with some of industry tech giants to build a most
                                efficient data analysis and processing.</p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"> <img src={iconSilk} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>Fabric Products & Accessories</h1>
                            <p>We have built a strong alliance with some of industry tech giants to build a most
                                efficient data analysis and processing.</p>
                        </div>
                    </div>
                    <div className="h5_box_right_item">
                        <div className="h5_box_right_element"> <img src={iconWest} alt=""/></div>
                        <div className="h5_box_right_item_content">
                            <h1>Fabric Products & Accessories</h1>
                            <p>We have built a strong alliance with some of industry tech giants to build a most
                                efficient data analysis and processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS5;