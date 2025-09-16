import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {Index_Router} from "./utils/consts.jsx";
import AOS from "aos";
import Navbar from "@/component/navbar/navbar.jsx";
import Footer from "@/component/footer/footer.jsx";
import ScrollToTop from "@/component/ScrollToTop.jsx";

function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
    }, [location.pathname]);


    useEffect(() => {
       const lang_id = window.localStorage.getItem("selectedLanguage")
        if (lang_id === "1"){
       document.body.classList.add("roboto");

        }
    }, []);
    return (
        <>
            <Routes>
                {Index_Router.map(({Path, Component}, index) => (
                    <Route path={Path} element={<>
                        <Navbar/>
                        <Component/>
                        <Footer/>
                    </>} key={index}/>
                ))}
            </Routes>
        </>

    );
}

export default App;