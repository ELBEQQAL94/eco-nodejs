// LIBS
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// ROUTES
import { AppRoute } from "./routes/AppRoute";
import { APP_ROUTES } from "./routes/Routes";

// STORE
import store from "./store";

// CSS
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {
            APP_ROUTES.map(
              ({ exact, path, component, layout, roles, isPrivate, isAdmin }, index) =>
                <AppRoute 
                  key={index} 
                  exact={exact} 
                  path={path} 
                  component={component} 
                  layout={layout} 
                  roles={roles} 
                  isPrivate={isPrivate}
                  isAdmin={isAdmin}
                />
            )
          }
        </Switch>
        {/* <LoadingComponent/> */}
      </Router>
    </Provider>
  );
};

export default App;