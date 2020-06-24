import React, { useState } from "react";
import CollapsiblePanel from "./CollapsiblePanel";
import BlogStyle from './styles/BlogStyle';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

//This blog is brought to you by the Letter Q, the number 9, and inspiration from the brilliant code of Nithin Hampi. See more of Nithin's work at https://github.com/nithinthampi


function Blog() {
    const text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil earum illo ipsa velit facilis provident qui eligendi, quia ut magnam tenetur. Accusantium nisi quos delectus in necessitatibus ad. Ducimus, id!";
    const [collapse, setCollapse] = useState(true);
    const [expand, setExpand] = useState("Read All");
    const [icon, setIcon] = useState("fa fa-chevron-right");
    const collapseAll = () => {
        setCollapse(!collapse);
        setIcon(state => {
            return state === "fa fa-chevron-right"
                ? "fa fa-chevron-down"
                : "fa fa-chevron-right";
        });
        setExpand(state => {
            return state === "Read All" ? "Read Less" : "Read All";
        });
    };
    return (
        <BlogStyle>
            {/* Expand/Collapse All */}
            <div className="blog-button-box">
            <button
                type="button"
                onClick={collapseAll}
            >
                <i className={icon} /> {expand}
            </button>
            <CollapsiblePanel expand="Title 1" collapse={collapse}>
                <span>{text}</span>
            </CollapsiblePanel>
            <CollapsiblePanel expand="expand 2" collapse={collapse}>
                <span>{text}</span>
            </CollapsiblePanel>
            <CollapsiblePanel expand="expand 3" collapse={collapse}>
                <span>{text}</span>
            </CollapsiblePanel>
            <CollapsiblePanel expand="expand 4" collapse={collapse}>
                <span>{text}</span>
            </CollapsiblePanel>
            <CollapsiblePanel expand="expand 5" collapse={collapse}>
                <span>{text}</span>
            </CollapsiblePanel>
            </div>
        </BlogStyle>
    );
}

export default Blog;
