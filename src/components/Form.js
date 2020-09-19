import React from "react";

function Form() {
  return (
    <form className="contact__form">
      <div className="contact__fgroup">
        <label htmlFor="name">name</label>
        <input type="text" id="name" placeholder="Type your name" />
      </div>
      <div className="contact__fgroup">
        <label htmlFor="tlp">phone number</label>
        <input type="number" id="tlp" placeholder="Type your phone number" />
      </div>
      <div className="contact__fgroup">
        <label htmlFor="email">email</label>
        <input type="email" id="email" placeholder="Type your email address" />
      </div>
      <div className="contact__fgroup">
        <label htmlFor="msg">your message</label>
        <textarea id="msg" placeholder="Type your message here"></textarea>
      </div>
      <button className="button" type="submit">
        send message
      </button>
    </form>
  );
}

export default Form;
