import { Route, Redirect } from "react-router-dom";
// import { Forbidden } from "../components/forbidden/Forbidden";

import { isAuthenticated } from "../helpers/isAuthenticated";

export const AppRoute = ({
  component: Component,
  layout: Layout,
  roles,
  isPrivate,
  path,
  isAdmin,
  ...rest
}) => {
  // TODO:
  // make component for admin routes
  // private routes
  // public routes

  // const state = useSelector(state => state.userState.user);

  if (isAuthenticated()) {
    const {
      user: { role },
    } = isAuthenticated();

    if (path === "/login" || path === "/register") {
      return <Redirect to="/" />;
    }

    if (isAdmin) {
      if (roles === role) {
        return (
          <Route
            {...rest}
            render={(props) => (
              <Layout>
                <Component {...props} />
              </Layout>
            )}
          />
        );
      }
      return <Route {...rest} render={() => <Layout>Access denied</Layout>} />;
    }

    if (isPrivate) {
      return (
        <Route
          {...rest}
          render={(props) => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      );
    }
  }
  if (!isPrivate) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }
  return <Route {...rest} render={() => <Layout>Access denied</Layout>} />;
};
