import React from 'react';
import "./home_s3.css"
import {Link} from "react-router-dom"
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import Home_s4 from "@/page/home/home_component/home_s4/home_s4.jsx";
import siryo from "@/assets/home/home_s3/siryo.png"
import volokna from "@/assets/home/home_s3/volokna.png"
import product from "@/assets/home/home_s3/product.png"
import proizvodstva from "@/assets/home/home_s3/proizvodstva.png"

const HomeS3 = () => {
    return (
        <div className={"h_3"}>
            <div className="container">
                <div className="h3_title">
                    <div className="h3_title_left">
                        <span className={"subtitle"}>Производство & Цикл</span>
                        <h2>Замкнутый и экологичный цикл от поля до продукции</h2>
                    </div>
                    <div className="h3_title_right">
                        <Link to={"#"}>Контакты </Link>
                    </div>
                </div>

                <div className="h3_container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={siryo} alt={"zarhal siryo"}/>
                                <h2>Приём сырья</h2>
                                <p>Каждый год мы принимаем до 10 000 тонн высококачественного хлопка для переработки.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={volokna} alt={"zarhal siryo"}/>
                                <h2> Изготовление волокна</h2>
                                <p>На современных мощностях мы получаем до 3 500 тонн прочного и чистого волокна.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={proizvodstva} alt={"zarhal siryo"}/>
                                <h2>Производство ткани</h2>
                                <p>Из собственного сырья изготавливаем 24 млн м² качественной ткани разных типов.</p>
                                <Link to={"#"}>Свяжитесь</Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="h3_item">
                                <div className="h3_item_element"></div>
                                <img src={product} alt={"zarhal siryo"}/>
                                <h2>Готовая продукция</h2>
                                <p>Благодаря швейным цехам мы выпускаем до 14 млн единиц одежды и текстильных изделий в год.</p>
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