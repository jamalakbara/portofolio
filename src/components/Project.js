import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function Project(props) {
  const { img, title, company } = props;

  const handleOver = (e) => {
    const hover = e.target.children[1];
    hover.classList.toggle("porto-anim");
  };

  const handleLeave = (e) => {
    const hover = e.target.children[1];
    hover.classList.toggle("porto-anim");
  };

  return (
    <div
      className="portofolio__container"
      onMouseOver={handleOver}
      onMouseOut={handleLeave}
    >
      <img src={img} className="portofolio__image" />
      <div className="portofolio__hover">
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
