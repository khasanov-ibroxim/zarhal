import React from 'react';
import "./about_s3.css"
import icon_1 from "@/assets/about/about_s3/volokna.png"
import icon_2 from "@/assets/about/about_s3/siryo.png"
import icon_3 from "@/assets/about/about_s3/tkan.png"
import icon_4 from "@/assets/about/about_s3/izdeliya.png"
import {useTranslation} from "react-i18next";


const AboutS3 = () => {
    const {t} = useTranslation();
    return (
        <div className={"about_s3"}>
            <div className={"container"}>
                <div className="about_s3_title">
                    <div className="subtitle">{t("about.s3.subtitle")}</div>
                    <h1>{t("about.s3.title")}</h1>
                </div>
              <div className="about_s3_box">
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_1} alt=""/>
                          <h1>{t("about.s3.i1.t")}</h1>
                          <p>{t("about.s3.i1.d")}</p>
                      </div>
                      <div className="about_s3_item_num">01</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_2} alt=""/>
                          <h1>{t("about.s3.i2.t")}</h1>
                          <p>{t("about.s3.i2.d")}</p>
                      </div>
                      <div className="about_s3_item_num">02</div>
                  </div>

                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_4} alt=""/>
                          <h1>{t("about.s3.i3.t")}</h1>
                          <p dangerouslySetInnerHTML={{__html:t("about.s3.i3.d")}}></p>
                      </div>
                      <div className="about_s3_item_num">03</div>
                  </div>
              </div>
            </div>
        </div>

    );
};

export default AboutS3;