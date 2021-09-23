import React from "react";
import footerStyles from "../Footer/footer.module.css";
export default function Footer() {
  return (
      <div className={footerStyles.footer}>
      {/* <div className={footerStyles.title}>¿Querés comunicarte? </div>
      <div className={footerStyles.contact}><i class="fas fa-phone"></i>4687-3064</div>
      <div className={footerStyles.contact}><i class="fab fa-whatsapp"></i>11-5015-4607</div>
      <div className={footerStyles.contact}><i class="fas fa-envelope"></i>volquetescenta@gmail.com</div>
      <div className={footerStyles.contact}><i class="far fa-compass"></i>
        Av. Coronel Cárdenas(entre Bragado y Tapalqué), Mataderos - C.A.B.A
      </div> */}
      <span className={footerStyles.rights}>Volquetes CENTA 2021. Todos los derechos reservados. </span>
     
    </div>
  );
}
