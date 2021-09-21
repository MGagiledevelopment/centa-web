import React from "react"
import notfoundStyles from "../Notfound/style.module.css"
import notfound from "../../images/not-found.svg"

export default function NotFound(){
    return (
    <div className={notfoundStyles.style}>
        <div>LA URL INDICADA NO EXISTE</div>
        <img src={notfound} alt="icon" width="100"/>
    </div>)
}