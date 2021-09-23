import React from "react"
import {Route, Switch} from "react-router"
import Home from "../../components/Home"
import Contact from "../../components/Contact"
import AboutUs from "../../components/AboutUs"
import NotFound from "../../components/Notfound"

export default function Main(){
    return (<div>
        <Switch>
        <Route component={Home} exact path="/"></Route>
        <Route component={Contact} path="/contacto"></Route>
        <Route component={AboutUs} path="/nosotros"></Route>
        <Route component={NotFound} path="*"></Route>
        </Switch>
    </div>)
}