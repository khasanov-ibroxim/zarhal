import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Production_db} from "@/page/production/production_db.jsx";
import {ABOUT, BLOG_POST, HOME} from "@/utils/consts.jsx";
import {Blog_db} from "@/page/blog/blog_db.jsx";
import {useTranslation} from "react-i18next";
import header_img from "@/assets/about/about_s1/DSC03588.jpg";

const BlogPage = () => {
    const {id} = useParams();
    const {t } = useTranslation();
    const navigate = useNavigate();
    const Blog_pages = Blog_db(t)
        .map(item => ({
            id: item.id,
            blog_img: item.blog_img,
            title: item.title,
            desc: item.desc,
        }));
    const currentBlog = Blog_db(t).find(
        itemBlog => itemBlog.id === Number(id)
    ) || null;


    if (!currentBlog) {
        navigate(HOME);
        return null;
    }

    return (
        <div>
            <div className="contact_header">
                <div className="contact_opacity"></div>
                <img src={header_img} alt="contact"/>
                <div className="about_header_title">
                    <h1 style={{textAlign:"center", fontSize:"35px"}}>{currentBlog.title}</h1>
                    <div className="about_header_subtitle">
                        <Link to={HOME}>{t("about.header.link")}</Link>
                        <span></span>
                        <Link to={ABOUT} className={"activeText"}>Blog</Link>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="blog_page_box">
                    <div className="blog_content">
                        <img src={currentBlog.blog_img} alt=""/>
                        <h1>{currentBlog.title}</h1>
                        <p>{currentBlog.desc}</p>
                        <p dangerouslySetInnerHTML={{__html: currentBlog.full_desc}}></p>
                    </div>
                    <div className="blog_sidebar">
                        <div className="blog_resent">
                            {Blog_pages.map((itemBlog, i) => (
                                <Link to={BLOG_POST.replace(":id" , itemBlog.id)} className="resent_item">
                                    <img src={itemBlog.blog_img} alt=""/>
                                    <div className="resent_right">
                                        {itemBlog.title}
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;