import React from 'react';
import "./about_s4.css"
import {Link} from "react-router-dom"
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
const AboutS4 = () => {
    return (
        <div className={"about_s4"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="about_s4_left">
                            <h1>Производство реактивного крашения</h1>
                            <p>Полный цикл: от сырья до готовой текстильной продукции.</p>
                            <Link to={"#"}>Свяжитесь</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about_s4_right">
                            <div className="about_s4_item">
                                <div className="about_s4_item_top">
                                    <EmojiEventsOutlinedIcon/> <h1>65 млн+</h1>
                                </div>
                                <div className="about_s4_item_bottom">
                                    Квадратных метров тканей в год
                                </div>
                            </div>

                            <div className="about_s4_item">
                                <div className="about_s4_item_top">
                                    <AllInclusiveOutlinedIcon/> <h1>8 млн+</h1>
                                </div>
                                <div className="about_s4_item_bottom">Единиц швейной продукции в год</div>
                            </div>

                            <div className="about_s4_item">
                                <div className="about_s4_item_top">
                                    <Diversity1OutlinedIcon/> <h1>20 млн+</h1>
                                </div>
                                <div className="about_s4_item_bottom">Евро ежегодного экспорта</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS4;