import React from "react";

function Project(props) {
  const { img, title, company } = props;

  return (
    <div className="portofolio__container">
      <img src={img} className="portofolio__image" />
      <div className="portofolio__hover">
        <p className="portofolio__hover-title">{title}</p>
        <p className="portofolio__hover-company">{company}</p>
      </div>
    </div>
  );
}

export default Project;
