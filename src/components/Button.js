import React, { useEffect } from "react";

function Button(props) {
  const { className, href, name } = props;

  useEffect(() => {
    if (name == "download resume")
      document.querySelector(".about__cv").setAttribute("download", "");
  });

  return (
    <a href={href} className={className}>
      {name}
    </a>
  );
}

export default Button;
