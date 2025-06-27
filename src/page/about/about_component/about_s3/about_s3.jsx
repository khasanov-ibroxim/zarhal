import React from 'react';
import "./about_s3.css"
import icon_1 from "@/assets/about/about_s3/volokna.png"
import icon_2 from "@/assets/about/about_s3/siryo.png"
import icon_3 from "@/assets/about/about_s3/tkan.png"
import icon_4 from "@/assets/about/about_s3/izdeliya.png"


const AboutS3 = () => {
    return (
        <div className={"about_s3"}>
            <div className={"container"}>
                <div className="about_s3_title">
                    <div className="subtitle">INDUSTRIES & PRODUCTION</div>
                    <h1>Your Business Grow & Successful</h1>
                </div>
              <div className="about_s3_box">
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_1} alt=""/>
                          <h1>Fabric Treatment</h1>
                          <p>We do execute stabilization including reweaving & stitch repair details.</p>
                      </div>
                      <div className="about_s3_item_num">01</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_2} alt=""/>
                          <h1>Fabric Treatment</h1>
                          <p>We do execute stabilization including reweaving & stitch repair details.</p>
                      </div>
                      <div className="about_s3_item_num">02</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_3} alt=""/>
                          <h1>Fabric Treatment</h1>
                          <p>We do execute stabilization including reweaving & stitch repair details.</p>
                      </div>
                      <div className="about_s3_item_num">03</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_4} alt=""/>
                          <h1>Fabric Treatment</h1>
                          <p>We do execute stabilization including reweaving & stitch repair details.</p>
                      </div>
                      <div className="about_s3_item_num">04</div>
                  </div>
              </div>
            </div>
        </div>

    );
};

export default AboutS3;