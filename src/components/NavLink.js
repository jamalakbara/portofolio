import React from "react";

function NavLink(props) {
  const { href, name, className, yHeight } = props;

  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.scrollTo(0, yHeight);
      }}
    >
      {name}
    </a>
  );
}

export default NavLink;
