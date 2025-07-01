import React from 'react';
import "./about_s5.css"
import r_img from "@/assets/about/about_s5/imgi_11_col-bg-005.jpg"

const AboutS5 = () => {
    return (
        <div className={"about_s5"}>
            <div className="about_s5_left ">

                <div className="about_s5_left_title">
                    <div className="subtitle">Рост проекта</div>
                    <h1>Динамика развития и планы</h1>
                    <p>
                        Проект уверенно набирает обороты и выходит на финальную стадию подготовки к запуску. Мы
                        инвестируем в технологичное оснащение, обучаем персонал и наращиваем экспортные возможности,
                        чтобы уже в ближайшее время выйти на мировую арену как надёжный производитель текстиля.
                    </p>
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