import React from "react";
import navbarStyles from "../Navbar/navbar.module.css"

export default function Navbar() {
  return (
    <nav>
      <div className={navbarStyles.menumobile}>
        <div className={navbarStyles.logo}>
          <p>
            VOLQUETES <span>CENTA</span>
          </p>
        </div>

        <input
          type="checkbox"
          id="cuadrado-checkbox"
          className={navbarStyles.cuadradocheckbox}
        />

        <label className={navbarStyles.labelhamburguesa} for="cuadrado-checkbox">
          <div className={navbarStyles.containerhamburguesa}>
            <div className={`${navbarStyles.linea} ${navbarStyles.lineatop}`}></div>
            <div className={`${navbarStyles.linea} ${navbarStyles.lineamed}`}></div>
            <div className={`${navbarStyles.linea} ${navbarStyles.lineabottom}`}></div>
          </div>
        </label>

        <div className={navbarStyles.menu}>
            <div className={navbarStyles.menuitems}>INICIO</div>
            <div className={navbarStyles.menuitems}>SERVICIO</div>
            <div className={navbarStyles.menuitems}>GALERIA</div>
            <div className={navbarStyles.menuitems}>CONTACTO</div>
        </div>
      </div>

      {/* <div class={navbarStyles.menudesktop}>
        <div id="logo">
          <p>
            VOLQUETES <span>CENTA</span>
          </p>
        </div>
        <ul>
          <li>NOSOTROS</li>
          <li>SERVICIO</li>
          <li>GALERIA</li>
          <li>CONTACTO</li>
        </ul>
      </div> */}
    </nav>
  );
}
