import React from 'react';
import "./home.css"
import Home_header from "./home_component/home_header/home_header.jsx";
import Home_s1 from "@/page/home/home_component/home_s1/home_s1.jsx";
import Home_s2 from "@/page/home/home_component/home_s2/home_s2.jsx";
import Home_s3 from "@/page/home/home_component/home_s3/home_s3.jsx";
import Home_s4 from "@/page/home/home_component/home_s4/home_s4.jsx";
import Home_s5 from "@/page/home/home_component/home_s5/home_s5.jsx";
import Home_s6 from "@/page/home/home_component/home_s6/home_s6.jsx";
import Home_s7 from "@/page/home/home_component/home_s7/home_s7.jsx";

const Home = () => {
    return (
        <div>
            <Home_header/>
            <Home_s1/>
            <Home_s2/>
            <Home_s3/>
            <Home_s5/>
            <Home_s6/>
            <Home_s7/>

        </div>
    );
};

export default Home;