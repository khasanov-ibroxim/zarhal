import React from 'react';
import "./home_header.css"
import {Carousel} from "react-bootstrap";
import home_header1 from "@/assets/home/home_header/portfolio-3.jpg"
import home_header2 from "@/assets/home/home_header/portfolio-4.jpg"
import header_icon_1 from "@/assets/home/home_header/h_header_icon_1.png"
import header_icon_2 from "@/assets/home/home_header/h_header_icon_2.png"
import {Link} from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';

const HomeHeader = () => {
    return (
        <div className={"home_header"}>
            <div className="carousel_opacity"></div>
            <div className="carousel_opacity2"></div>

            <Carousel fade className={"home_carousel "}>
                <Carousel.Item >
                    <img src={home_header1} alt="" className={"carousel_img"}/>
                    <Carousel.Caption className="h-caption container">
                        <div className="animate-left h-header-top">
                            <div className="h-header-top_icon">
                                <img src={header_icon_1} alt=""/>
                                <p>For Tomorrow's people</p>
                            </div>
                            <div className="h-header-top-text">
                                <h1>World Class Textile <br/> Engineering Solutions !</h1>
                            </div>
                            <div className="h-header-top-btns">
                                <Link to={"#"}>Discover more</Link>
                                <Link to={"#"}>More services</Link>
                            </div>
                        </div>
                        <div className="h-header-bottom animate-top">
                            <div className="h-header-bottom_box">
                                <h3>Lets get <br/>to work together</h3>
                                <div className="h-header-bottom_box_icon">
                                    <GroupsIcon/>
                                </div>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item >
                    <img src={home_header1} alt="" className={"carousel_img"}/>
                    <Carousel.Caption className="h-caption container">
                        <div className="animate-left h-header-top">
                            <div className="h-header-top_icon">
                                <img src={header_icon_1} alt=""/>
                                <p>For Tomorrow's people2</p>
                            </div>
                            <div className="h-header-top-text">
                                <h1>World Class Textile <br/> Engineering Solutions !2</h1>
                            </div>
                            <div className="h-header-top-btns">
                                <Link to={"#"}>Discover more2</Link>
                                <Link to={"#"}>More services2</Link>
                            </div>
                        </div>
                        <div className="h-header-bottom animate-top" >
                            <div className="h-header-bottom_box">
                                <h3>Lets get <br/>to work together2</h3>
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