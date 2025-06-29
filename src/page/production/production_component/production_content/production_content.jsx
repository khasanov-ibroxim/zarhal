import React from 'react';
import "./production_content.css"
import img_top from "@/assets/production/imgi_2_4-min.jpg"
import img_1 from "@/assets/production/imgi_3_detail-3.jpg"
import img_2 from "@/assets/production/imgi_18_detailed-4-300x154.jpg"
import CheckIcon from '@mui/icons-material/Check';


const ProductionContent = ({item}) => {
    return (
        <div className={"production_content_box"}>
            <h1>{item.h_1}</h1>
            <p>{item.p_1}</p>
            <img src={item.img_top} alt="" className={"img_top"}/>
            <h1 style={{marginTop: "20px"}}>{item.h_2}</h1>
            <p>{item.p_2}</p>
            <div className="production_ul_box">
                <ul>
                    {item.ul_1.map((itemLi , index)=>(
                        <li key={index}><CheckIcon/>{itemLi}</li>
                    ))}
                </ul>
                <ul>
                    {item.ul_2.map((itemLi , index)=>(
                        <li key={index}><CheckIcon/>{itemLi}</li>
                    ))}
                </ul>
            </div>

            <h1>{item.h_3}</h1>
            <div className="production_img_box">
                <img src={item.img_1} alt=""/>
                <img src={item.img_2} alt=""/>
            </div>


            <h1>{item.h_4}</h1>
            <p>{item.p_3}</p>

        </div>
    );
};

export default ProductionContent;