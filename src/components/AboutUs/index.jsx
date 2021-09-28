import React from "react";
import aboutStyles from "../AboutUs/about.module.css";


export default function AboutUs() {
  return (
    <div className={aboutStyles.aboutus}>
      <div className={aboutStyles.image}>
        <h6>Nosotros</h6>
        
      </div>

      

        <div className={aboutStyles.titlebox}>
        <h6 className={aboutStyles.title}>LA EMPRESA</h6>
        <div className={aboutStyles.line}></div>
        </div>
        <div className={aboutStyles.container}>
        <div>
          Somos VOLQUETES CENTA, la empresa lider en el barrio de Mataderos hace más de 25
          años. Contamos con habilitación por parte del Gobierno de la Ciudad de
          Buenos Aires para trabajar en todo CAPITAL FEDERAL
        </div>
        <div> Atendemos a obras en contrucción y particulares</div>
        <div> Realizamos retiros de escombros, basura y demoliciones </div>
        <div> Contamos con stock permanente y atención personalizada </div>

        <div className={aboutStyles.contact}>¿Querés contactarnos? ¿Necesitas un presupuesto? <a href=" https://api.whatsapp.com/send?phone=541150154607" target="_blank">¡Hacé click acá!</a></div>
      </div>
    </div>
  );
}
