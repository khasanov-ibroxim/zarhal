import React from 'react';
import "./about_s2.css"
import right_img from "@/assets/about/about_s2/about_s2_right.jpg"
import left_img from "@/assets/about/about_s2/about_s2_left.jpg"
import CheckIcon from '@mui/icons-material/Check';
import {CONTACT} from "@/utils/consts.jsx";
import {Link} from "react-router-dom"

const AboutS2 = () => {
    return (
        <div className={"about_s2"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="about_s2_right">
                            <img src={right_img} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about_s2_left">
                            <div className="about_s2_left_title">
                                <div className="subtitle">Высокое качество</div>
                                <h1>От хлопка до готовой продукции — под полным контролем</h1>
                                <p>Наша компания — это производственный комплекс полного цикла, обеспечивающий выпуск
                                    экологичных текстильных изделий мирового уровня. Мы объединяем современные
                                    технологии, глубокую экспертизу и социальную ответственность, чтобы создавать
                                    текстиль, соответствующий ожиданиям клиентов по всему миру.</p>
                            </div>
                            <div className="about_s2_body">
                                <img src={left_img} alt=""/>
                                <p>Мы создаём текстиль с полным циклом производства — от хлопка до готового изделия</p>
                            </div>
                            <div className="about_s2_footer">
                                <ul>
                                    <li><CheckIcon/>
                                        Выращиваем и перерабатываем хлопок, обеспечивая стабильное качество на всех этапах.
                                    </li>
                                    <li><CheckIcon/>Используем современное оборудование и экологичные краски, соответствующие международным стандартам.</li>
                                    <li><CheckIcon/>Создаём рабочие места в регионах и поддерживаем развитие надомного труда.</li>
                                </ul>
                                <div className="about_s2_footer_btns">
                                    <Link to={"#"} className={"about_s2_footer_btn_1"}>Свяжитесь</Link>
                                    <Link to={CONTACT} className={"about_s2_footer_btn_2"}>Контакты</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS2;