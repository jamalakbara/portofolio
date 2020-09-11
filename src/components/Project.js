import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

function Project(props) {
  const { img, title, company } = props;
  const [classContainer, setClassContainer] = useState("portofolio__hover");

  const handleMouseEnter = (e) => {
    setClassContainer("portofolio__hover porto-anim");
  };

  const handleMouseLeave = (e) => {
    setClassContainer("portofolio__hover");
  };

  return (
    <div
      className="portofolio__container"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <img src={img} className="portofolio__image" alt="" />
      <div className={classContainer}>
        <a href={`#${title}`} className="portofolio__hover-search">
          <SearchIcon />
        </a>
        <a href={`#${title}`} className="portofolio__hover-title">
          {title}
        </a>
        <p className="portofolio__hover-company">{company}</p>
      </div>
    </div>
  );
}

export default Project;
