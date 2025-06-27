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
                            <h1>Stone Work Embroidery</h1>
                            <p>Consequat mauris nunc congue nisi vitae suscipit tellus mauris.</p>
                            <Link to={"#"}>Read more</Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about_s4_right">
                            <div className="about_s4_item">
                                <div className="about_s4_item_top">
                                    <EmojiEventsOutlinedIcon/> <h1>45+</h1>
                                </div>
                                <div className="about_s4_item_bottom">
                                    Different kind texttile
                                    products
                                </div>
                            </div>

                            <div className="about_s4_item">
                                <div className="about_s4_item_top">
                                    <AllInclusiveOutlinedIcon/> <h1>25+</h1>
                                </div>
                                <div className="about_s4_item_bottom">
                                    Years Of Working Experience
                                </div>
                            </div>

                            <div className="about_s4_item">
                                <div className="about_s4_item_top">
                                    <Diversity1OutlinedIcon/> <h1>325+</h1>
                                </div>
                                <div className="about_s4_item_bottom">
                                    Trusted Satisfied
                                    Clients
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS4;