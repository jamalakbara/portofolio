import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import PublicIcon from "@material-ui/icons/Public";

function Info({ alamat, email, tlp, web }) {
  return (
    <div className="contact__info">
      <p className="contact__head">contact info</p>
      <div className="contact__loc">
        <RoomIcon />
        <div className="contact__detail">
          <p>{alamat}</p>
        </div>
      </div>
      <div className="contact__email">
        <EmailIcon />
        <div className="contact__detail">
          <p>{email}</p>
        </div>
      </div>
      <div className="contact__phone">
        <CallIcon />
        <div className="contact__detail">
          <p>{tlp}</p>
        </div>
      </div>
      <div className="contact__web">
        <PublicIcon />
        <div className="contact__detail">
          <p>{web}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
