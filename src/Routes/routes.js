import { Switch, Route } from "react-router-dom"
import Home from "../Page/Home"
import Login from "../Page/Login"
import Subscribe from "../Page/Subscribe"
import WhatsNew from "../Page/WhatsNew"

const PagesRoute = () => {
    return (
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Login} path="/login" />
            <Route component={WhatsNew} path="/whatsnew" />
            <Route component={Subscribe} path="/subscribe" />
        </Switch>
    )
}

export default PagesRoute