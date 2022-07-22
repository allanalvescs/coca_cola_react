import { Route as CommonRoute } from "react-router-dom"
import { UserProvider } from "../Providers/modules/User"

const Route = ({ component: Component, ...rest }) => {
    return (
        <CommonRoute
            {...rest}
            render={() => {
                return
                <Component />
            }}
        />
    )
}

export default Route