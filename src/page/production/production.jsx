import React from 'react';
import Production_s1 from "@/page/production/production_component/production_s1/production_s1.jsx";
import Production_sidebar from "@/page/production/production_component/production_sidebar/production_sidebar.jsx";
import Production_content from "@/page/production/production_component/production_content/production_content.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {Production_db} from "@/page/production/production_db.jsx";
import {HOME} from "@/utils/consts.jsx";

const Production = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const currentProduct = Production_db.find(itemProduct => itemProduct.id === Number(id))
    if (!currentProduct) {
        return window.location.assign(HOME)
    }

    return (
        <div>
            <Production_s1 item={currentProduct}/>
            <div className="container">
                <div className="production_box row">
                    <div className="production_sidebar col-lg-3">
                        <Production_sidebar />
                    </div>
                    <div className="production_content col-lg-9">
                        <Production_content item={currentProduct}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Production;