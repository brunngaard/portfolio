import React from "react";
import "./contact.css";
import { Animated } from "react-animated-css";
import SocialMedia from "../Home/SocialMedia";

export const Contact = () => {
  return (
    <Animated
      animationIn="bounceInDown"
      animationOut="fadeOut"
      animateDelay="animate__delay-10s	10s"
      isVisible={true}
    >
      <div>
        <h1 className="contacth1">
          Feel free to contact me if you need help with buidling a website for
          your company or if you are looking to hire me. Im up for any
          challange!
        </h1>
        <div className="information">
          <div className="info">
            <p>Send me an email</p>
            <a
              href="mailto:brunngard.emil@gmail.com"
              className="fa fa-envelope fa-2x"
            ></a>
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default Contact;
