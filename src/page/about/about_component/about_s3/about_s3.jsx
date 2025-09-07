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
                    <div className="subtitle">Производственная гибкость</div>
                    <h1>Выходим на зарубежные рынки</h1>
                </div>
              <div className="about_s3_box">
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_1} alt=""/>
                          <h1>Экспортный потенциал</h1>
                          <p>Ежегодно мы поставляем продукцию на рынки Европы и СНГ, достигая объёма до 20 млн евро в год — благодаря качеству, которому доверяют.</p>
                      </div>
                      <div className="about_s3_item_num">01</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_2} alt=""/>
                          <h1>Гибкость в производстве</h1>
                          <p>Можем выпускать ткани разной плотности — от 100 до 350 г/м², и шириной до 400 см.</p>
                      </div>
                      <div className="about_s3_item_num">02</div>
                  </div>

                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_4} alt=""/>
                          <h1>Экологичный подход</h1>
                          <p>Экологичность в деталях: <br/>
                              Только безопасные красители и современные технологии, щадящие природу — на всех этапах производства.
                          </p>
                      </div>
                      <div className="about_s3_item_num">03</div>
                  </div>
              </div>
            </div>
        </div>

    );
};

export default AboutS3;