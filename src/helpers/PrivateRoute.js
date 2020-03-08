import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useCookies} from "react-cookie";

function PrivateRoute({component: Component, ...rest}){
    const [cookies] = useCookies(['authToken'])
    
    if(cookies.authToken){
        return <Route component={Component}/>
    }else{
        return <Redirect to="/login"/>
    }
}

export default PrivateRoute;