

import React from 'react';
import working from "../../images/working.svg";
import proxStyles from "../proximamente/prox.module.css";

export default function proximamente (){

    return(

        <div className={proxStyles.prox}>
      <div>¡ESTAMOS TRABAJANDO EN ESTA SECCIÓN!</div>
      <img src={working} alt="icon" width="100" />
    </div>

    )

}