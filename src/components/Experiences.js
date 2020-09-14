import React from "react";

function Experiences({ date, title, company, desc, href }) {
  return (
    <a
      href={href}
      target={href !== "#" && "_blank"}
      rel="noopener noreferrer"
      className="work__detail"
    >
      <div className="work__top">
        <p className="work__date">{date}</p>
        <h1 className="work__title">{title}</h1>
        <p className="work__company">{company}</p>
      </div>
      <p className="work__desc">{desc}</p>
    </a>
  );
}

export default Experiences;
