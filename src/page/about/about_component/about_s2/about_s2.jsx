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
                                <h1>“ZARHAL GROUP” kompaniyasi tekstil sohasidagi faoliyati 2002-yildan boshlangan.</h1>
                                <p>Kompaniya tashkil topgan ilk kunlardanoq sifat, ishonch va zamonaviy yondashuvni
                                    ustuvor tamoyil sifatida tanlab, o‘z faoliyatini yuritib kelmoqda.</p>
                            </div>
                            <div className="about_s2_body">
                                <img src={left_img} alt=""/>
                                <p>Hozirgi kunda, “ZARHAL GROUP” tarkibida bir nechta asosiy korxonalar faoliyat
                                    yuritmoqda. Jumladan:</p>
                            </div>
                            <div className="about_s2_footer">
                                <ul>
                                    <li><CheckIcon/>
                                        <div>
                                            “Kamalak Shabnam teks” MCHJ 2010-yilda ish faoliyatini boshlab, bugungi
                                            kunda “Kamalak Shabnam teks” MChJning ishlab chiqarish quvvati yiliga 3.500
                                            tonna ip kalava, 32,0 mln kv.metr gazlama matolari ishlab chiqarishni
                                            tashkil etmoqda.
                                        </div>

                                    </li>
                                    <li><CheckIcon/>
                                        <div>2015-yilda “Buxoro Zarhal teks” MCHJ paxta to’qimachilik klasteri
                                            faoliyatini yo’lga qo’yildi. Kompaniya paxtachilik yo‘nalishida ilg‘or
                                            agrotexnik yondashuvlar asosida yiliga 12.000 tonna ekologik toza organik
                                            paxta xom-ashyosini qayta ishlash natijasida 4000 tonna tola ishlab
                                            chiqarish quvatiga ega barqaror ishlab chiqarish tizimini shakllantirdi.
                                        </div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div>2020-yilda esa “Olot spinner” MCHJ to’quv ishlab chiqarish korxonasi
                                            tashkil etilib, u erda ilg‘or texnologiyalar va zamonaviy dastgohlar joriy
                                            etilishi bilan mato ishlab chiqarish salohiyati sezilarli darajada kengayib,
                                            yiliga 20 mln.m2 mahsulot ishlab chiqarish hajmi bilan yangi bosqichga
                                            ko‘tarildi.
                                        </div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div>2021-yilda tikuvchilik sohasiga qadam qo‘yib, “Bosso Teks” MChJga asos
                                            solinib, o‘z ishlab chiqarishini yangi bosqichga olib chiqdi. Kompaniya
                                            endilikda nafaqat mato, balki tayyor restoran va mehmonxonalar uchun maxsus
                                            skatert, salfetkalar, yuqori sifatli uy tekstil mahsulotlarini ham
                                            yaratmoqda.
                                        </div>
                                    </li>
                                    <li><CheckIcon/>
                                        <div>2022-yilda “LEICHTER KAMALAK TEXTILIEN” MCHJ O’zbekiston-Germaniya qo’shma
                                            korxonasi tashkil etildi. Xorijlik hamkorlarimiz bilan hamkorlikda,
                                            Yevropaning ilg‘or zamonaviy texnologiyalarini joriy etish orqali yuqori
                                            sifatli paxta ipi va nafis dizaynga ega tayyor mahsulotlar eksporti
                                            muvaffaqiyatli yo‘lga qo‘yildi.
                                        </div>
                                    </li>
                                </ul>
                                <p>Biz to‘xtamaymiz — kompaniyamiz tezkor sur’atlarda o‘sib, doimiy ravishda yangi
                                    yutuqlar sari intilmoqda. Biz bilan qoling va yaqin orada taqdim etiladigan ajoyib
                                    yangiliklar va imkoniyatlar kutmoqda!</p>
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