import React from 'react';
import "./home_s3.css"
import {Link} from "react-router-dom"
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import Home_s4 from "@/page/home/home_component/home_s4/home_s4.jsx";
import siryo from "@/assets/home/home_s3/siryo.png"
import volokna from "@/assets/home/home_s3/volokna.png"
import product from "@/assets/home/home_s3/product.png"
import proizvodstva from "@/assets/home/home_s3/proizvodstva.png"

import i1 from "@/assets/home/home_s3/cotton1.png"
import i2 from "@/assets/home/home_s3/cotton.png"
import i3 from "@/assets/home/home_s3/yarn.png"

const HomeS3 = () => {
    return (
        <div className={"h_3"}>
            <div className="container">
                <div className="h3_title">
                    <div className="h3_title_left">
                        <span className={"subtitle"}>Производство & Цикл</span>
                        <h2>Каждый этап под контролем —<br/> от поля до продукта.</h2>
                    </div>
                    <div className="h3_title_right">
                        <Link to={"#"}>Контакты </Link>
                    </div>
                </div>

                <div className="h3_container">
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={i1} alt={"zarhal siryo"}/>
                                <h2>Приём сырья</h2>
                                <p>Каждый год мы принимаем до 12 000 тонн высококачественного-органического хлопка для переработки.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={i2} alt={"zarhal siryo"}/>
                                <h2> Изготовление волокна</h2>
                                <p>На современных мощностях мы получаем в год более 4000 тонн прочного и чистого волокна.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={i3} alt={"zarhal siryo"}/>
                                <h2>Изготовление пряжи</h2>
                                <p>На современном оборудовании мы получаем в год до 3500 тонн чистого и прочного волокна.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="col-lg-3  mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={proizvodstva} alt={"zarhal siryo"}/>
                                <h2>Производство ткани</h2>
                                <p>Из собственного сырья мы изготавливаем в год 32 млн м² качественной ткани разных
                                    типов.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-4">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={product} alt={"zarhal siryo"}/>
                                <h2>Готовая продукция</h2>
                                <p>Благодаря швейным цехам мы выпускаем до 10 млн единиц швейных изделий в год.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Home_s4/>
            </div>
        </div>
    );
};

export default HomeS3;