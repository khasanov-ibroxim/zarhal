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
                                {/*<div className="subtitle">Высокое качество</div>*/}
                                <h1>Деятельность компании <span className="roboto">«ZARHAL GROUP»</span>  в текстильной отрасли началась в 2002
                                    году.</h1>
                                <p>С первых дней своего основания компания выбрала приоритетными принципами качество,
                                    доверие и современный подход, на основе которых успешно ведёт свою деятельность.</p>
                            </div>
                            <div className="about_s2_body">
                                <img src={left_img} alt=""/>
                                <p>В настоящее время в состав <span className="roboto">«ZARHAL GROUP»</span>  входят несколько ключевых предприятий. В
                                    частности:</p>
                            </div>
                            <div className="about_s2_footer">
                                <ul>
                                    <li><CheckIcon/>
                                        <div>ООО <span className="roboto">«Kamalak Shabnam Teks»</span>  начало свою деятельность в 2010 году. На
                                            сегодняшний день производственная мощность предприятия составляет 3 500 тонн
                                            пряжи и 32,0 млн кв. метров тканых материалов в год.
                                        </div>

                                    </li>
                                    <li><CheckIcon/>
                                        <div>В 2015 году был создан хлопкоперерабатывающий кластер ООО <span className="roboto">«Buxoro Zarhal Teks»</span> . Компания на основе передовых агротехнических подходов обеспечивает переработку 12 000 тонн экологически чистого органического хлопка в год, в результате чего формируется устойчивая производственная система с мощностью выпуска 4 000 тонн волокна.</div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div>В 2020 году было основано ткацкое предприятие ООО <span className="roboto">«Olot spinner»</span> , где внедрение передовых технологий и современного оборудования позволило значительно расширить производственный потенциал. Сегодня мощность предприятия составляет 20 млн кв. метров продукции в год, что вывело его на новый уровень.</div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div>В 2021 году компания сделала шаг в сферу швейного производства, создав ООО <span className="roboto">«Bosso Teks»</span> , и вышла на новый этап развития. Теперь компания производит не только ткани, но и готовые изделия: специальные скатерти и салфетки для ресторанов и гостиниц, а также высококачественные товары для домашнего текстиля.</div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div>В 2022 году было создано совместное узбекско-германское предприятие ООО <span className="roboto">«LEICHTER KAMALAK TEXTILIEN»</span> . В сотрудничестве с зарубежными партнёрами успешно налажен экспорт высококачественной хлопковой пряжи и готовой продукции с изысканным дизайном, благодаря внедрению передовых европейских технологий.</div>
                                    </li>
                                </ul>
                                <p>Мы не останавливаемся на достигнутом — компания стремительно развивается и постоянно движется к новым успехам. Оставайтесь с нами — впереди вас ждут новые яркие проекты и возможности!</p>
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