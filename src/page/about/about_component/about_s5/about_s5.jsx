import React from 'react';
import "./about_s5.css"
import r_img from "@/assets/about/about_s5/imgi_11_col-bg-005.jpg"
const AboutS5 = () => {
    return (
        <div className={"about_s5"}>
            <div className="about_s5_left ">

                <div className="about_s5_left_title">
                    <div className="subtitle">WELL DESIGNED</div>
                    <h1>We Provide Clothes More Than Just Stitched Fabric</h1>
                    <p>FABLIO is the largest peer-to-peer comparison initiative in the textile industry. It tracks
                        the apparel material and home textile sector’s progress toward more sustainable materials
                        sourcing, as well as alignment with global effort. Besides the regular production became the
                        largest exporter.</p>
                </div>
                <div className="about_s5_bottom">
                    <div className="about_s5_bottom_item">
                        <p>Textile</p>
                        <div className="about_s5_bottom_item_bar" style={{width:"90%"}}>
                            <span >90%</span>
                        </div>
                    </div>
                    <div className="about_s5_bottom_item">
                        <p>Textile</p>
                        <div className="about_s5_bottom_item_bar" style={{width:"80%"}}>
                            <span >90%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_s5_right">
                <img src={r_img} alt=""/>
            </div>
        </div>
    );
};

export default AboutS5;