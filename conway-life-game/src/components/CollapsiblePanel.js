import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import BlogStyle from './styles/BlogStyle';


function CollapsiblePanel({ children, ...props }) {
  const { expand, collapse } = props;
  const [isCollapse, setIsCollapse] = useState(collapse);
  // const [icon, setIcon] = useState("fa fa-chevron-down");
  const [icon, setIcon] = useState();
  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  const animate = collapse => {
    setIsCollapse(collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  useEffect(() => {
    animate(!collapse);
  }, [collapse]);

  return (
      <BlogStyle>
    <div className="coll-panel">
      <button
        type="button"
        className="coll-panel-btn btn-primary btn-block text-left"
        onClick={() => toggle()}
      >
        <i className={icon} /> {expand}
      </button>
      <Collapse className="border text-left p-2" isOpen={isCollapse}>
        {children}
      </Collapse>
    </div>
    </BlogStyle>
  );
}

CollapsiblePanel.defaultProps = {
  children: "Add node as a child",
  expand: "Collapsible Panel",
  collapse: true
};

export default CollapsiblePanel;
