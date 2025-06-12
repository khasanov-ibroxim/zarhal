import React from 'react';
import "./home_s1.css"
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckIcon from '@mui/icons-material/Check';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import h_s1_img from "@/assets/home/home_s1/single-imge01.jpg"
import {Link} from "react-router-dom"

const HomeS1 = () => {
    return (
        <div className={"h_s1 container"}>

            <div className="h_s1_top">
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <LocalPrintshopOutlinedIcon/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>RAYON FABRIC</p>
                                <h3>The Global Fabrics Distributor</h3>
                            </div>
                            <div className="h_s1_top_item_right_content_arrow">
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h_s1_top_item">
                    <div className="h_s1_top_item_left">
                        <LocalPrintshopOutlinedIcon/>
                    </div>
                    <div className="h_s1_top_item_right">
                        <div className="h_s1_top_item_right_content">
                            <div className="h_s1_top_item_right_content_text">
                                <p>RAYON FABRIC</p>
                                <h3>The Global Fabrics Distributor</h3>
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
                            <span className={"subtitle"}>About Fablio</span>
                            <h2>The Best Solution for all Industrial & Factory Businesses</h2>
                            <p>Since more than 40 years, FABLIO is operating in the textile market manufacture and
                                trader. As years go by, the range of produced textiles has been increased, besides the
                                regular production became the largest exporter.</p>

                            <div className="h_s1_content_box_bottom">
                                <div className="h_s1_content_box_bottom_left">
                                    <ul>
                                        <li><CheckIcon/>Experienced Attorneys Professional.</li>
                                        <li><CheckIcon/>Experienced Attorneys Professional.</li>
                                        <li><CheckIcon/>Experienced Attorneys Professional.</li>
                                        <li><CheckIcon/>Experienced Attorneys Professional.</li>
                                    </ul>
                                    <Link to={"#"} className="h_s1_content_box_bottom_left_link">View more!</Link>
                                </div>
                                <div className="h_s1_content_box_bottom_right">
                                        <div className="h_s1_content_box_bottom_right_element"></div>
                                        <div className="h_s1_content_box_bottom_right_element_2">
                                            <HomeOutlinedIcon/>
                                            <h2>4567</h2>
                                            <p>Happy Clients.</p>
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