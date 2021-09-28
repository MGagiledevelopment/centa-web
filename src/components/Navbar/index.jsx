import React, { useContext } from "react";
import navbarStyles from "../Navbar/styles.module.css";
import menulogo from "../../images/menu.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/appContext";

export default function Navbar() {
  const { menu, setMenu } = useContext(AppContext);

  const handleMenu = () => {
    setMenu(!menu);
  };
  console.log(menu);

  const handleoption = () => {
    setMenu(false);
  };

  return (
    <nav>
      <div className={navbarStyles.menutop}>

        <div className={navbarStyles.logo}>
          <a href="/">
            {" "}
            <p>
              VOLQUETES <span>CENTA</span>
            </p>
          </a>
        </div>

        {/* <input
        type="checkbox"
        id="cuadrado-checkbox"
        className={navbarStyles.cuadradocheckbox}
      /> */}
<div className={navbarStyles.menumobile}>
        <button className={navbarStyles.burger} onClick={handleMenu}>
          {" "}
          <i class="fas fa-bars"></i>{" "}
        </button>

        <div
          className={`${menu ? navbarStyles.open : ""} ${navbarStyles.close}`}
        >
          <Link to="/">
            {" "}
            <button onClick={handleoption} className={navbarStyles.menuitems}>
              INICIO
            </button>{" "}
          </Link >
          <Link to="/nosotros">
          <button onClick={handleoption} className={navbarStyles.menuitems}>
            NOSOTROS
          </button>
          </Link>
          <Link to="/contacto">
            {" "}
            <button onClick={handleoption} className={navbarStyles.menuitems}>
              SERVICIO
            </button>{" "}
          </Link>

          <Link to="/proximamente">
          <button onClick={handleoption} className={navbarStyles.menuitems}>
            GALERIA
          </button>

          </Link>
          <Link to="/contacto">
            <button onClick={handleoption} className={navbarStyles.menuitems}>
              CONTACTO
            </button>
          </Link>
        </div>
      </div>


      <div class={navbarStyles.menudesktop}>
        <ul>
        <Link to="/nosotros"> <li>NOSOTROS</li> </Link>
          <Link to="/contacto"> <li>SERVICIO</li> </Link>
          <Link to="/">  <li>GALERIA</li> </Link>
          <Link to="/contacto"> <li>CONTACTO</li></Link>
        </ul>
      </div>
      
</div>


      
    </nav>
  );
}
