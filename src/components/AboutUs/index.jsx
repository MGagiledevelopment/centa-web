import React from "react";
import aboutStyles from "../AboutUs/about.module.css";
import working from "../../images/working.svg";

export default function AboutUs() {
  return (
    <div className={aboutStyles.aboutus}>
      <div>¡ESTAMOS TRABAJANDO EN ESTA SECCIÓN!</div>
      <img src={working} alt="icon" width="100" />
    </div>
  );
}
