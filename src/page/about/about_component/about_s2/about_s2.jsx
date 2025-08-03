import React from 'react';
import "./about_s2.css"
import right_img from "@/assets/about/about_s2/DSC03335.jpg"
import left_img from "@/assets/about/about_s2/DSC03520.jpg"
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
                                <p>Zarhalgroup объединяет ведущие текстильные компании, в том числе:</p>
                            </div>
                            <div className="about_s2_footer">
                                <ul>
                                    <li><CheckIcon/>
                                        <div>
                                            Kamalak Shabnam Teks, в состав которой входит немецкий бренд Curt Bauer — с
                                            более чем 140-летней историей производства элитного домашнего текстиля.
                                            <br/> Подробнее:
                                            <br/> <a href="http://curt-bauer-group.de">http://curt-bauer-group.de</a>
                                            <br/> <a href="https://t.me/uzbekCTM/535">https://t.me/uzbekCTM/535</a>
                                        </div>

                                    </li>
                                    <li><CheckIcon/>
                                        <div>
                                            Leichter Kamalak Textilien, официальный партнёр и правопреемник немецкого
                                            бренда Langheinrich, признанного в Европе за качество столового и
                                            гостиничного текстиля.
                                            <br/>Подробнее: <a href="https://langheinrich.de">https://langheinrich.de</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="about_s2_footer_btns">
                                    <Link to={"#"} className={"about_s2_footer_btn_1"}>Свяжитесь</Link>
                                    <Link to={CONTACT}
                                          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                                          className={"about_s2_footer_btn_2"}>Контакты</Link>
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