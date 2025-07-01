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
                          <p>Готовая продукция ориентирована на рынки США и Европы с ежегодным объёмом до 20 млн евро.</p>
                      </div>
                      <div className="about_s3_item_num">01</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_2} alt=""/>
                          <h1>Гибкость в производстве</h1>
                          <p>Можем выпускать ткани разной плотности и ширины — от 100 до 350 г/м², до 360 см.</p>
                      </div>
                      <div className="about_s3_item_num">02</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_3} alt=""/>
                          <h1>Социальный вклад</h1>
                          <p>Благодаря проекту более 1000 жителей сельских районов получат стабильную занятость.</p>
                      </div>
                      <div className="about_s3_item_num">03</div>
                  </div>
                  <div className="about_s3_item">
                      <div className="about_s3_item_content">
                          <img src={icon_4} alt=""/>
                          <h1>Экологичный подход</h1>
                          <p>Во всех этапах производства применяются безопасные красители и технологии с заботой об окружающей среде.</p>
                      </div>
                      <div className="about_s3_item_num">04</div>
                  </div>
              </div>
            </div>
        </div>

    );
};

export default AboutS3;