import React from 'react';
import "./home_header.css"
import {Carousel} from "react-bootstrap";
import home_header1 from "@/assets/home/home_header/DSC03541.jpg"
import home_header2 from "@/assets/home/home_header/DSC03081.jpg"
import home_header3 from "@/assets/home/home_header/DSC03380.jpg"
import home_header4 from "@/assets/home/home_header/DSC03380.jpg"
import header_icon_1 from "@/assets/home/home_header/h_header_icon_1.png"
import header_icon_2 from "@/assets/home/home_header/h_header_icon_2.png"
import {Link} from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import {useTranslation} from "react-i18next";
import {CONTACT, PRODUCTION} from "@/utils/consts.jsx";

const HomeHeader = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_header"}>
            <div className="carousel_opacity"></div>
            <div className="carousel_opacity2"></div>

            <Carousel fade className={"home_carousel "} interval={3000}>
                <Carousel.Item >
                    <img src={home_header1} alt="" className={"carousel_img"}/>
                    <Carousel.Caption className="h-caption container">
                        <div className="animate-left h-header-top">
                            <div className="h-header-top_icon">
                                <img src={header_icon_1} alt=""/>
                                <p>{t("home.home_header.p")}</p>
                            </div>
                            <div className="h-header-top-text">
                                <h1 dangerouslySetInnerHTML={{__html:t("home.home_header.h1")}}></h1>
                            </div>
                            <div className="h-header-top-btns">
                                <Link to={PRODUCTION.replace(":id", 1)}>{t("home.home_header.link1")}</Link>
                                <Link to={CONTACT}>{t("home.home_header.link2")}</Link>
                            </div>
                        </div>
                        <div className="h-header-bottom animate-top">
                            <div className="h-header-bottom_box">
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_header.h3")}}></h3>
                                <div className="h-header-bottom_box_icon">
                                    <GroupsIcon/>
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={home_header2} alt="" className={"carousel_img"}/>
                    <Carousel.Caption className="h-caption container">
                        <div className="animate-left h-header-top">
                            <div className="h-header-top_icon">
                                <img src={header_icon_1} alt=""/>
                                <p>{t("home.home_header.p")}</p>
                            </div>
                            <div className="h-header-top-text">
                                <h1 dangerouslySetInnerHTML={{__html:t("home.home_header.h1")}}></h1>
                            </div>
                            <div className="h-header-top-btns">
                                <Link to={PRODUCTION.replace(":id", 1)}>{t("home.home_header.link1")}</Link>
                                <Link to={CONTACT}>{t("home.home_header.link2")}</Link>
                            </div>
                        </div>
                        <div className="h-header-bottom animate-top">
                            <div className="h-header-bottom_box">
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_header.h3")}}></h3>
                                <div className="h-header-bottom_box_icon">
                                    <GroupsIcon/>
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={home_header3} alt="" className={"carousel_img"}/>
                    <Carousel.Caption className="h-caption container">
                        <div className="animate-left h-header-top">
                            <div className="h-header-top_icon">
                                <img src={header_icon_1} alt=""/>
                                <p>{t("home.home_header.p")}</p>
                            </div>
                            <div className="h-header-top-text">
                                <h1 dangerouslySetInnerHTML={{__html:t("home.home_header.h1")}}></h1>
                            </div>
                            <div className="h-header-top-btns">
                                <Link to={PRODUCTION.replace(":id", 1)}>{t("home.home_header.link1")}</Link>
                                <Link to={CONTACT}>{t("home.home_header.link2")}</Link>
                            </div>
                        </div>
                        <div className="h-header-bottom animate-top">
                            <div className="h-header-bottom_box">
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_header.h3")}}></h3>
                                <div className="h-header-bottom_box_icon">
                                    <GroupsIcon/>
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img src={home_header4} alt="" className={"carousel_img"}/>
                    <Carousel.Caption className="h-caption container">
                        <div className="animate-left h-header-top">
                            <div className="h-header-top_icon">
                                <img src={header_icon_1} alt=""/>
                                <p>{t("home.home_header.p")}</p>
                            </div>
                            <div className="h-header-top-text">
                                <h1 dangerouslySetInnerHTML={{__html:t("home.home_header.h1")}}></h1>
                            </div>
                            <div className="h-header-top-btns">
                                <Link to={PRODUCTION.replace(":id", 1)}>{t("home.home_header.link1")}</Link>
                                <Link to={CONTACT}>{t("home.home_header.link2")}</Link>
                            </div>
                        </div>
                        <div className="h-header-bottom animate-top">
                            <div className="h-header-bottom_box">
                                <h3 dangerouslySetInnerHTML={{__html:t("home.home_header.h3")}}></h3>
                                <div className="h-header-bottom_box_icon">
                                    <GroupsIcon/>
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default HomeHeader;