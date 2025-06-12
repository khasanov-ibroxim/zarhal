import React from 'react';
import "./home.css"
import Home_header from "./home_component/home_header/home_header.jsx";
import Home_s1 from "@/page/home/home_component/home_s1/home_s1.jsx";
import Home_s2 from "@/page/home/home_component/home_s2/home_s2.jsx";
import Home_s3 from "@/page/home/home_component/home_s3/home_s3.jsx";
import Home_s4 from "@/page/home/home_component/home_s4/home_s4.jsx";

const Home = () => {
    return (
        <div>
            <Home_header/>
            <Home_s1/>
            <Home_s2/>
            <Home_s3/>

        </div>
    );
};

export default Home;