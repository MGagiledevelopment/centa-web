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
  console.log(menu)

  const handleoption = () =>{
    setMenu(false)
  }

  return (
    <nav>
    <div className={navbarStyles.menumobile}>
      <div className={navbarStyles.logo}>
       <a href="/"> <p>
          VOLQUETES <span>CENTA</span>
        </p></a>
      </div>

      {/* <input
        type="checkbox"
        id="cuadrado-checkbox"
        className={navbarStyles.cuadradocheckbox}
      /> */}

      
       <button className={navbarStyles.burger} onClick={handleMenu}> <i class="fas fa-bars"></i> </button>
    

      <div className={`${ menu ? navbarStyles.open :"" } ${navbarStyles.close}`}>
       <Link to="/"> <button onClick={handleoption} className={navbarStyles.menuitems}>INICIO</button> </Link>
          <button onClick={handleoption} className={navbarStyles.menuitems}>NOSOTROS</button>
          <button onClick={handleoption} className={navbarStyles.menuitems}>SERVICIO</button>
          <button onClick={handleoption} className={navbarStyles.menuitems}>GALERIA</button>
          <Link to="/contacto"><button onClick={handleoption} className={navbarStyles.menuitems}>CONTACTO</button></Link>
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
