import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {Index_Router} from "./utils/consts.jsx";
import AOS from "aos";
import Navbar from "@/component/navbar/navbar.jsx";
import Footer from "@/component/footer/footer.jsx";

function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
    }, [location.pathname]);

    return (
        <Routes>
            {Index_Router.map(({Path, Component}, index) => (
                <Route path={Path} element={<>
                    <Navbar/>
                    <Component/>
                    <Footer/>
                </>} key={index}/>
            ))}
        </Routes>
    );
}

export default App;