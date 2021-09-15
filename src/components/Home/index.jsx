import React from "react";
import homeStyles from "../Home/home.module.css"
import logo from "../../images/whatsapp.svg"
export default function Home() {
  return (
    <main>
      <section className={homeStyles.seccionbienvenida} >
        <h1>
         Alquiler de Volquetes 
        </h1>
        <p>para la construcción y particulares</p>

       <a href=" https://api.whatsapp.com/send?phone=[arg]][+541151842587]" target="_blank" className={homeStyles.logo}> ¡HABLEMOS! <img src={logo} /> </a>
      </section>
    </main> 
  );
}
