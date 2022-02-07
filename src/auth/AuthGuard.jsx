import React, {
    // useContext,
    useEffect,
    useState,
} from 'react'
import { Redirect, useLocation, Route, useParams } from 'react-router-dom'
// import AppContext from "app/appContext";
import useAuth from '../hooks/useAuth'

// const getUserRoleAuthStatus = (pathname, user, routes) => {
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length
//       ? matched.auth.includes(user.role)
//       : true;
//   console.log(matched, user);
//   return authenticated;
// };

const AuthGuard = ({ children }) => {
    const {
        isAuthenticated,
        // user
    } = useAuth()

    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()
    const { tokenParam } = useParams();
    if(!tokenParam){
        var param = '0x3b831d36ed418e893f42d46ff308c326c239429f';
    }else{
        var param = tokenParam;
    }
    // const { routes } = useContext(AppContext);
    // const isUserRoleAuthenticated = getUserRoleAuthStatus(pathname, user, routes);
    // let authenticated = isAuthenticated && isUserRoleAuthenticated;

    // IF YOU NEED ROLE BASED AUTHENTICATION,
    // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
    // AND COMMENT OUT BELOW LINE
    let authenticated = isAuthenticated

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previouseRoute])

    if (authenticated) return <><Route
    exact
    path="/"
    render={() => {
        return (

            <Redirect to={{pathname:"/token",search:param}} /> 
        )
    }}
/>{children}</>
    else {
        return (
            
            <Redirect
                to={{
                    pathname: '/token',
                    search:param,
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }
}

export default AuthGuard
