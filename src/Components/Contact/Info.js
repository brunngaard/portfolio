import React from "react";
import "./contact.css";

export const Info = () => {
  return (
    <div className="info">
      <a
        href="mailto:brunngard.emil@gmail.com"
        style={{ color: "white" }}
        className="fa fa-envelope"
      >
        Mail me
      </a>
      <a
        href=""
        style={{ color: "white", textDecoration: "none" }}
        className="fa fa-phone"
      >
        072-357 91 54
      </a>
    </div>
  );
};

export default Info;
