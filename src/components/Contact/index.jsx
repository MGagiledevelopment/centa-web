import React from "react";
import contactStyles from "../Contact/contact.module.css";
import icon from "../../images/telephone.png"

export default function Contact() {
  return (
    <section className={contactStyles.contacto}>
      <div className={contactStyles.image}>
        <h6>Contacto</h6>
      </div>
    <div className={contactStyles.titlebox}>
      <h6 className={contactStyles.title}>NUESTROS DATOS</h6>
      <div className={contactStyles.line}></div>
      </div>
      <div className={contactStyles.datos}>
        <div className={contactStyles.datosbox}>
          <span>Teléfonos</span>
          <span><i class="fas fa-phone"></i>4687-3064</span>
          
        </div>

        <div className={contactStyles.datosbox}>
          <span>Whatsapp</span>
          <span><i class="fab fa-whatsapp"></i>11-5015-4607</span>
          <span><i class="fab fa-whatsapp"></i> 11-5184-2587</span>
        </div>

        <div className={contactStyles.datosbox}>
          <span>Email</span>
          <span><i class="fas fa-envelope"></i>volquetescenta@gmail.com</span>
        </div>

        <div className={contactStyles.datosbox}>
          <span>Dirección</span>
          <span><i class="far fa-compass"></i>Av.Coronel Cárdenas (entre Bragado y Tapalqué), C.A.B.A</span>
        </div>
      </div>
    </section>
  );
}
