import React from "react";
import LayoutSection from "./LayoutSection";
import Form from "./Form";
import Info from "./Info";
import { info, socmed } from "./misc/ContactMisc";

function Contact() {
  return (
    <LayoutSection sectionName={"contact"} label={"contact me"}>
      <Info
        alamat={info.alamat}
        email={info.email}
        tlp={info.tlp}
        web={info.web}
      />
      <div className="contact__follow">
        <p className="contact__head">follow me</p>
        <div className="contact__socmed">{socmed}</div>
      </div>
      <Form />
    </LayoutSection>
  );
}

export default Contact;
