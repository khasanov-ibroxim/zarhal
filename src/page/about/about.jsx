import React from 'react';
import "./about.css"
import About_s1 from "@/page/about/about_component/about_s1/about_s1.jsx";
import About_s2 from "@/page/about/about_component/about_s2/about_s2.jsx";
import About_s3 from "@/page/about/about_component/about_s3/about_s3.jsx";
import About_s4 from "@/page/about/about_component/about_s4/about_s4.jsx";
import About_s5 from "@/page/about/about_component/about_s5/about_s5.jsx";
import About_s6 from "@/page/about/about_component/about_s6/about_s6.jsx";

const About = () => {
    return (
        <div>
            <About_s1/>
            <About_s2/>
            <div className="about_grey_bg">
                <About_s3/>
                <About_s4/>
                <About_s5/>
                <About_s6/>
            </div>
        </div>
    );
};

export default About;