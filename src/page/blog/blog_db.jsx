import id1 from "@/assets/blog/1/id1.jpg";
import id2 from "@/assets/blog/2/id2.jpg";

export const Blog_db = (t)=>[
    {
        id:1,
        blog_img:id1,
        title:t("blog.i1.title"),
        desc:``,
        full_desc: t("blog.i1.full_desc")
    },
    {
        id:2,
        blog_img:id2,
        title:t("blog.i2.title"),
        desc:``,
        full_desc: t("blog.i2.full_desc")
    },
]