// LIBS
import { BrowserRouter as Router, Switch } from "react-router-dom";

// ROUTES
import { AppRoute } from "./router/AppRoute";
import { APP_ROUTES } from "./router/Routes";

// CSS
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        {
          APP_ROUTES.map(
            ({ exact, path, component, layout, roles }, index) =>
              <AppRoute key={index} exact={exact} path={path} component={component} layout={layout} roles={roles} />
          )
        }
      </Switch>
      {/* <LoadingComponent/> */}
    </Router>
  );
};

export default App;