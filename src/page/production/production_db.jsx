
import header_1 from "@/assets/production/1/sunset-meadow-wildflowers-bloom-dusk-generated-by-ai.jpg"
import top_1 from "@/assets/production/1/krasota_organiceskogo_rosta_zakatnogo_luga_v_prirode_sozdannaa_iskusstvennym.jpg"
import img_1_1 from "@/assets/production/1/cotton-plants-still-life (2).jpg"
import img_1_2 from "@/assets/production/1/cotton-plants-still-life (3).jpg"

import header_2 from "@/assets/production/2/DSC03015.jpg"
import top_2 from "@/assets/production/2/DSC02973.jpg"
import img_2_1 from "@/assets/production/2/DSC02814.jpg"
import img_2_2 from "@/assets/production/2/DSC03015.jpg"

import header_3 from "@/assets/about/about_s1/DSC03588.jpg"
import top_3 from "@/assets/production/3/DSC03321.jpg"
import img_3_1 from "@/assets/production/3/DSC03426.jpg"
import img_3_2 from "@/assets/production/3/DSC03332.jpg"

import header_4 from "@/assets/production/4/DSC03784.jpg"
import top_4 from "@/assets/production/4/DSC03839.jpg"
import img_4_1 from "@/assets/production/4/DSC03921.jpg"
import img_4_2 from "@/assets/production/4/DSC03791.jpg"

export const Production_db =(t)=> [
    {
        id:1,
        page_title: t("production.i1.title"),
        page_name:t("production.i1.page_name"),
        h_1:t("production.i1.h1"),
        p_1:t("production.i1.p"),
        h_2:t("production.i1.h2"),
        p_2:``,
        ul_1:[ ],
        ul_2:[],
        h_3:t("production.i1.h3"),
        h_4:t("production.i1.h4"),
        p_3:``,

        header_img:header_1,
        img_top:top_1,
        img_1:img_1_1,
        img_2:img_1_2
    },
    {
        id:2,
        page_name:t("production.i2.page_name"),
        page_title: t("production.i2.page_title"),
        h_1:``,
        p_1:t("production.i2.p1"),
        h_2:t("production.i2.h_2"),
        p_2:t("production.i2.p_2"),
        ul_1:[t("production.i2.ul_1.l1") , t("production.i2.ul_1.l2") , t("production.i2.ul_1.l3")],
        ul_2:[t("production.i2.ul_2.l1") , t("production.i2.ul_2.l2") ],
        h_3:t("production.i2.h_3"),
        h_4:"",
        p_3:t("production.i2.p_3"),

        header_img:header_2,
        img_top:top_2,
        img_1:img_2_1,
        img_2:img_2_2
    },
    {
        id:3,
        page_name:t("production.i3.page_name"),
        page_title: t("production.i3.page_title"),
        h_1:t("production.i3.h_1"),
        p_1:t("production.i3.p_1"),
        h_2:t("production.i3.h_2"),
        p_2:t("production.i3.p_2"),
        ul_1:[],
        ul_2:[],
        h_3:t("production.i3.h_3"),
        h_4:t("production.i3.h_4"),
        p_3:t("production.i3.p_3"),

        header_img:header_3,
        img_top:top_3,
        img_1:img_3_1,
        img_2:img_3_2
    },
    {
        id:4,
        page_name:t("production.i4.page_name"),
        page_title:t("production.i4.page_title"),
        h_1:t("production.i4.h_1"),
        p_1:t("production.i4.p_1"),
        h_2:t("production.i4.h_2"),
        p_2:``,
        ul_1:[t("production.i4.ul_1.l1") , t("production.i4.ul_1.l2") , t("production.i4.ul_1.l3")],
        ul_2:[t("production.i4.ul_2.l1")],
        h_3:t("production.i4.h_3"),
        h_4:t("production.i4.h_4"),
        p_3:t("production.i4.p_3"),

        header_img:header_4,
        img_top:top_4,
        img_1:img_4_1,
        img_2:img_4_2
    },
]