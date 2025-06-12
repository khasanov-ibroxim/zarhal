import React from 'react';
import "./home_s3.css"
import {Link} from "react-router-dom"
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import Home_s4 from "@/page/home/home_component/home_s4/home_s4.jsx";


const HomeS3 = () => {
    return (
        <div className={"h_3"}>
            <div className="container">
                <div className="h3_title">
                    <div className="h3_title_left">
                        <span className={"subtitle"}>INDUSTRIES & PRODUCTION</span>
                        <h2>We Give Production From Every Angle</h2>
                    </div>
                    <div className="h3_title_right">
                        <Link to={"#"}>Contact us</Link>
                    </div>
                </div>

                <div className="h3_container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <IronOutlinedIcon/>
                                <h2>Inter Design</h2>
                                <p>We develop a full cycle of project documentation on outline sketch design
                                    project.</p>
                                <Link to={"#"}>Read more!</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <IronOutlinedIcon/>
                                <h2>Inter Design</h2>
                                <p>We develop a full cycle of project documentation on outline sketch design
                                    project.</p>
                                <Link to={"#"}>Read more!</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <IronOutlinedIcon/>
                                <h2>Inter Design</h2>
                                <p>We develop a full cycle of project documentation on outline sketch design
                                    project.</p>
                                <Link to={"#"}>Read more!</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <IronOutlinedIcon/>
                                <h2>Inter Design</h2>
                                <p>We develop a full cycle of project documentation on outline sketch design
                                    project.</p>
                                <Link to={"#"}>Read more!</Link>
                            </div>
                        </div>

                    </div>
                </div>

                <Home_s4/>
            </div>
        </div>
    );
};

export default HomeS3;