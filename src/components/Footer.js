import React from "react";
import Logo from "./Logo";
import { socmedList } from "./misc/ContactMisc";
import Socmed from "./Socmed";

function Footer() {
  const socmed = socmedList.map((item) => (
    <Socmed href={item.href} Icon={item.icon} />
  ));
  return (
    <div className="footer">
      <Logo />
      <p className="footer__subtitle">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <div className="footer__socmed">{socmed}</div>
    </div>
  );
}

export default Footer;
