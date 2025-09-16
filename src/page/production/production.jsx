import React from 'react';
import Production_s1 from "@/page/production/production_component/production_s1/production_s1.jsx";
import Production_sidebar from "@/page/production/production_component/production_sidebar/production_sidebar.jsx";
import Production_content from "@/page/production/production_component/production_content/production_content.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {Production_db} from "@/page/production/production_db.jsx";
import {HOME} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const Production = () => {
    const {id} = useParams()
    const {t} = useTranslation()
    const navigate = useNavigate()


    const currentProduct = Production_db(t).find(
        itemProduct => itemProduct.id === Number(id)
    ) || null;


    if (!currentProduct) {
        navigate(HOME);
        return null;
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