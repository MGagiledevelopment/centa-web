import React from "react"
import {Route} from "react-router"
import Home from "../../components/Home"
import Contact from "../../components/Contact"

export default function Main(){
    return (<div>
        <Route component={Home} exact path="/"></Route>
        <Route component={Contact} path="/contacto"></Route>
    </div>)
}