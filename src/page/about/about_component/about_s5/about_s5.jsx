import React from 'react';
import "./about_s5.css"
import r_img from "@/assets/about/about_s5/DSC03091.jpg"

const AboutS5 = () => {
    return (
        <div className={"about_s5"}>
            <div className="about_s5_left ">

                <div className="about_s5_left_title">
                    <div className="subtitle">Рост проекта</div>
                    <h1>Динамика развития и планы</h1>
                    <p>Проект демонстрирует уверенный рост и приближается к финальной стадии подготовки к запуску. Мы
                        активно инвестируем в современное технологическое оснащение, развиваем компетенции команды и
                        расширяем экспортный потенциал. Всё это позволяет нам уже в ближайшее время заявить о себе на
                        международном рынке как о надёжном производителе текстильной продукции.</p>
                </div>
                <div className="about_s5_bottom">
                    <div className="about_s5_bottom_item">
                        <p>Подготовка к запуску </p>
                        <div className="about_s5_bottom_item_bar" style={{width: "85%"}}>
                            <span>85%</span>
                        </div>
                    </div>
                    <div className="about_s5_bottom_item">
                        <p>Готовность к экспорту </p>
                        <div className="about_s5_bottom_item_bar" style={{width: "70%"}}>
                            <span>70%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_s5_right ">
                <img src={r_img} alt=""/>
            </div>
        </div>
    );
};

export default AboutS5;