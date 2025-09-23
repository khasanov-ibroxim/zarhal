import React from 'react';

import "./blog.css"
import header_img from "@/assets/about/about_s1/DSC03588.jpg";
import {Link} from "react-router-dom";
import {ABOUT, BLOG, BLOG_POST, HOME} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";
import {Production_db} from "@/page/production/production_db.jsx";
import {Blog_db} from "@/page/blog/blog_db.jsx";

const Blog = () => {
    const {t} = useTranslation();
    const Blog_pages = Blog_db(t)
        .map(item => ({
            id: item.id,
            blog_img: item.blog_img,
            title: item.title,
            desc: item.desc,
        }));
    console.log(Blog_pages)
    return (
        <>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={header_img} alt="contact"/>
                <div className="about_header_title">
                    <h1>{t("blog.page_title")}</h1>
                    <div className="about_header_subtitle">
                        <Link to={HOME}>{t("about.header.link")}</Link>
                        <span></span>
                        <Link to={BLOG} className={"activeText"}>{t("blog.page_title")}</Link>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className="h_7_content">
                    <div className="blog_box">
                        {Blog_pages.map((item, index) => (
                            <Link className="h7_item" to={BLOG_POST.replace(":id",item.id)} key={index}>
                                <div className="h7_item_top">
                                    <img src={item.blog_img} alt=""/>
                                </div>
                                <div className="h7_item_bottom">
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;