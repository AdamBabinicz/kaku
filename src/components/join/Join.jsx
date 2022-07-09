import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4zlh6v4",
        "template_fy7ij6j",
        form.current,
        "user_yESYTXvq2eaUzMYTx9oxz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Wyślij</span>
          <span>swój</span>
        </div>
        <div>
          <span>adres mailowy,</span>
          <span className="stroke-text">jeżeli masz pytania</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Podaj swój email"
          />
          <button className="btn btn-j">Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
