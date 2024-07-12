import { HeaderOption } from "@models/models";
import { FC } from "react";
import AuthMiddleware from "./AuthMiddleware";

interface RouteResolverProps {
    route: HeaderOption;
}

const RouteResolver: FC<RouteResolverProps> = (props) => {
    return(
        <AuthMiddleware 
            restrictedRoute={props.route.isAuthRoute}
        >
            {props.route.layout ? (
                <props.route.layout>
                    <props.route.component />
                </props.route.layout>
            ) : (
                <props.route.component />
            )}
        </AuthMiddleware>
    )
}

export default RouteResolver;