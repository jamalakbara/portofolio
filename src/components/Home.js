import React from "react";
import Button from "./Button";

function Home() {
  return (
    <div className="introduction" id="home">
      <div className="introduction__main">
        <h1 className="introduction__name">Call Me Akbar</h1>
        <p className="introduction__text">
          young web developer and soon to be mobile developer also
        </p>
        <Button name={"hire me"} className={"button"} href={"#"} />
      </div>
      <div className="introduction__image">
        <img src="" className="introdiction__me" alt="" />
      </div>
    </div>
  );
}

export default Home;
