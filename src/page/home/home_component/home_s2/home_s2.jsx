import React from 'react';
import "./home_s2.css"
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import izdeliya from "@/assets/home/home_s2/izdeliya.png"
import siryo from "@/assets/home/home_s2/siryo.png"
import tkan from "@/assets/home/home_s2/tkan.png"
import volokna from "@/assets/home/home_s2/volokna.png"


const HomeS2 = () => {
    return (
        <div className={"h_2"}>
            <div className="container h-100">
                <div className="row pt-5 pb-5 d-flex justify-content-center align-items-center h-100">
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={siryo} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>12 000 тонн</h2>
                                <p>хлопкового сырца</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={volokna} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>4 000 тонн</h2>
                                <p>хлопкового волокна</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={volokna} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>3 500 тонн</h2>
                                <p>пряжи</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={tkan} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>32 млн м²</h2>
                                <p>Ткань</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="h_2_item">
                            <div className="h_2_item_top">
                                <img src={izdeliya} alt=""/>
                            </div>
                            <div className="h_2_item_bottom">
                                <h2>10 млн штук </h2>
                                <p>готовых швейных изделий</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS2;
