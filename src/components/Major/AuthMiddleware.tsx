import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthMiddlewareProps{
    restrictedRoute: boolean;
    children: ReactNode;
};

const AuthMiddleware: FC<AuthMiddlewareProps> = (props) => {
    // -- implement your authentication logic here -- //
    const accessToken = true;

    if(props.restrictedRoute){
        if(accessToken){
            return props.children;
        }else{
            return <Navigate to="/login" />
        }
    }else{
        return props.children;
    }
}

export default AuthMiddleware;