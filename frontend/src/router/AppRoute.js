import { Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
// import { Forbidden } from "../components/forbidden/Forbidden";

export const AppRoute = ({ component: Component, layout: Layout, roles: roles, ...rest }) => {
    return (
        <Route 
            {...rest} 
            render={
                props => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            } 
        />
    );
    // if ( checkHasAnyRole(authentication, roles) || roles.length === 0 ) {
    // } else if ( !checkHasAnyRole(authentication, roles) && roles.length !== 0 ) {
    //     return (<Route {...rest} render={ () => ( <Layout><Forbidden/></Layout> ) }/>);
    // } else {
    //     return ( <Route {...rest} render={ () => ( <Layout><NotFound/></Layout> ) }/> );
    // }
};