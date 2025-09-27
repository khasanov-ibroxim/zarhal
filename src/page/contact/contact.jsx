import React, {useState} from 'react';
import "./contact.css"
import header_img from "@/assets/contact/DSC02904.jpg"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {useTranslation} from "react-i18next";
import {message} from "antd";
import axios from "axios";


const Contact = () => {
    const {t} = useTranslation();
    const [username, setUsername] = useState("");
    const [tell, setTell] = useState("");
    const [email, setEmail] = useState("");
    const [userMessage, setMsg] = useState("");
    const [messageApi, contextHolder] = message.useMessage();
    const [disabled, setDisabled] = useState(false);

    const checkForm = () => {
        setDisabled(true);

        const hasNumber = /\d/;

        if (!username || username.trim().length === 0) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_empty'),
            });
            setDisabled(false);
            return;
        }

        if (username.trim().length <= 3 || hasNumber.test(username)) {
            messageApi.open({
                type: 'error',
                content: t('errors.name_error'),
            });
            setDisabled(false);
            return;
        }

        if (!tell || tell.trim().length < 8) {
            messageApi.open({
                type: 'error',
                content: t('errors.tell_error'),
            });
            setDisabled(false);
            return;
        }

        // To'g'ri xabar tuzamiz
        let msg = "";
        msg += `------------------\n`;
        msg += `Имя: ${username}\n`;
        msg += `Номер телефона: ${tell}\n`;
        msg += `Email: ${email || '-'}\n`;
        msg += `Сообщение: ${userMessage || '-'}\n`; // agar xohlasang textarea qiymatini ham qo‘shamiz

        const TOKEN = "8220236367:AAFTQ9t6T9CO8w1RGMDCyjmgdue8P_oGOKM";
        const CHAT_ID = "-1003047838699";

        axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: msg
        }).then((res) => {
            if (res?.status === 200) {
                messageApi.open({
                    type: 'success',
                    content: t('errors.success'),
                });
                setTimeout(() => {
                    setMsg('');
                    setTell('');
                    setEmail('');
                    setUsername('');
                    setDisabled(false);
                }, 1800);
            }
        }).catch((e) => {
            messageApi.open({
                type: 'error',
                content: t('errors.server_error'),
            });
            setDisabled(false);
        });
    };

    return (
        <div>
            {contextHolder}
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={header_img} alt="contact"/>
            </div>


            <div className="container">
                <div className="contact_content">
                    <div className="contact_form">
                        <div className="contact_title">
                            <h1>{t("contact.title")}</h1>
                            <p>{t("contact.subtitle")}</p>
                        </div>
                        <div className="contact_box d-flex justify-content-center align-items-center flex-column ">
                            <div className="input_box">
                                <input type="text" maxLength={13} placeholder={t("contact.name")} onChange={(e) => setUsername(e.target.value)} />
                                <input type="email" placeholder={t("contact.email")} onChange={(e) => setEmail(e.target.value)}/>
                                <input type="tel" maxLength={16} placeholder={t("contact.tel")} onChange={(e) => setTell(e.target.value)}/>
                            </div>
                            <div className="input_box mt-4">
                                <input type="text" placeholder={t("contact.company")}/>

                            </div>
                            <div className="input_box mt-4">
                                <textarea rows={7} placeholder={t("contact.msg")} onChange={(e) => setMsg(e.target.value)}/>
                            </div>
                            <button className={"contact_btn"} onClick={checkForm} disabled={disabled}>{t("contact.send")}</button>
                        </div>
                    </div>

                    <div className="contact_info">
                        <div className="row">
                            <div className="col-lg-5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.6086086002697!2d64.45117705644078!3d39.74663827859795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500527334645c9%3A0x187c4ea907cfe176!2sZarhal%20Group!5e0!3m2!1sru!2s!4v1750583046704!5m2!1sru!2s"
                                    width="100%" height="100%" allowFullScreen="" loading="lazy"
                                    className={"map"}
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact_info_box">
                                    <div className="contact_info_title">
                                        <div className="subtitle">{t("contact.box.subtitle")}</div>
                                        <h1>{t("contact.box.title")}</h1>
                                        <p>{t("contact.box.p")}</p>
                                    </div>
                                    <div className="contact_info_box_content">
                                        <h2>{t("contact.box.office")}</h2>
                                        <div className="contact_info_item_box">
                                            <div className="contact_info_item">
                                                <div className="contact_info_item_left">
                                                    <LocationOnOutlinedIcon/>
                                                </div>
                                                <div className="contact_info_item_right">
                                                    <h4>{t("contact.box.address_title")}</h4>
                                                    <p>{t("contact.box.address")}</p>
                                                </div>
                                            </div>
                                            <div className="contact_info_item">
                                                <div className="contact_info_item_left">
                                                    <EmailOutlinedIcon/>
                                                </div>
                                                <div className="contact_info_item_right">
                                                    <h4>{t("contact.box.tel")}</h4>
                                                    <p>+998652220707</p>
                                                    <p>+998772729922</p>
                                                    <p>info@zarhalgroup.uz</p>
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