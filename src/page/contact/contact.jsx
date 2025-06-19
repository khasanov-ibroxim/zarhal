import React from 'react';
import "./contact.css"
import header_img from "@/assets/home/home_header/portfolio-4.jpg"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Contact = () => {
    return (
        <div>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={header_img} alt="contact"/>
            </div>


            <div className="container">
                <div className="contact_content">
                    <div className="contact_form">
                        <div className="contact_title">
                            <h1>Contact Form</h1>
                            <p>Feel free to contact us through <a href="#">Twitter</a> or <a href="#">Facebook</a> if
                                you prefer.</p>
                        </div>
                        <div className="contact_box d-flex justify-content-center align-items-center flex-column ">
                            <div className="input_box">
                                <input type="text" placeholder={"Your Name"}/>
                                <input type="text" placeholder={"Your Email"}/>
                                <input type="text" placeholder={"Phone Number"}/>
                            </div>
                            <div className="input_box mt-4">
                                <input type="text" placeholder={"Company name"}/>
                                <input type="text" placeholder={"Subject"}/>
                            </div>
                            <div className="input_box mt-4">
                                <textarea rows={7} placeholder={"Message"}/>
                            </div>
                            <button className={"contact_btn"}>Send Now</button>
                        </div>
                    </div>

                    <div className="contact_info">
                        <div className="row">
                            <div className="col-lg-5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10093.221062694342!2d69.22499776479745!3d41.227597899959214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61a2ca2658d9%3A0xea6f4e90abf3d47d!2sSergeli%20Dehqon%20Bozori!5e0!3m2!1sru!2s!4v1750357741134!5m2!1sru!2s"
                                    width="100%" height="100%" allowFullScreen="" loading="lazy"
                                    className={"map"}
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact_info_box">
                                    <div className="contact_info_title">
                                        <div className="subtitle">Contact us</div>
                                        <h1>Get In Touch!</h1>
                                        <p>Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <div className="contact_info_box_content">
                                        <h2>Head Office</h2>
                                        <div className="contact_info_item_box">
                                            <div className="contact_info_item">
                                                <div className="contact_info_item_left">
                                                    <LocationOnOutlinedIcon/>
                                                </div>
                                                <div className="contact_info_item_right">
                                                    <h4>Address</h4>
                                                    <p>123 King Street,Melbourne Victoria 5000,New York.</p>
                                                </div>
                                            </div>
                                            <div className="contact_info_item">
                                                <div className="contact_info_item_left">
                                                    <EmailOutlinedIcon/>
                                                </div>
                                                <div className="contact_info_item_right">
                                                    <h4>Call Us / Email</h4>
                                                    <p>+1800-200-123456</p>
                                                    <p>fablio.support@yourmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Branch Office</h2>
                                        <div className="contact_info_item_box">
                                            <div className="contact_info_item">
                                                <div className="contact_info_item_left">
                                                    <LocationOnOutlinedIcon/>
                                                </div>
                                                <div className="contact_info_item_right">
                                                    <h4>Address</h4>
                                                    <p>123 King Street,Melbourne Victoria 5000,New York.</p>
                                                </div>
                                            </div>
                                            <div className="contact_info_item">
                                                <div className="contact_info_item_left">
                                                    <EmailOutlinedIcon/>
                                                </div>
                                                <div className="contact_info_item_right">
                                                    <h4>Call Us / Email</h4>
                                                    <p>+1800-200-123456</p>
                                                    <p>fablio.support@yourmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;