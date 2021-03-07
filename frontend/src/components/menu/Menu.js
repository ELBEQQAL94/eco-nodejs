// LIBS
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.css";

// ACTIONS
import { logoutAction } from "../../store/actions/user";

// TYPES
import { LOGOUT_USER } from "../../store/types/auth";

// NAV LINKS and AUTH LINKS
import { NAV_LINKS } from "./Links";

// ICONS
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// HELPERS
import { isAuthenticated } from "../../helpers/isAuthenticated";

// CSS
import "./Menu.css";

const isActive = (history, path, isBtn = false) => {
  if (history.location.pathname === path) {
    if (isBtn) {
      return "active-btn";
    }
    return "active";
  } else {
    return "";
  }
};

const Menu = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.userState.user);

  const history = useHistory();

  const logout = () => {
    logoutAction()
      .then(() => {
        dispatch({ type: LOGOUT_USER });
        toastr.info({}, "You Signout!", { positionClass: "toast-bottom-left" });
        localStorage.removeItem("jwt_info");
        history.push("/login");
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light menu">
      <Link className="navbar-brand" to="/">
        Ecommerce
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          {NAV_LINKS.map(({ id, title, path }) => (
            <li key={id} className="nav-item">
              <Link className={`nav-link ${isActive(history, path)}`} to={path}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        {isAuthenticated() ? (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <AccountCircleIcon />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item"
                  to={`${
                    isAuthenticated() && isAuthenticated().user.role === 1
                      ? "/admin/dashboard"
                      : "/profile"
                  }`}
                >
                  Profile
                </Link>
                <p className="dropdown-item btn" onClick={logout}>
                  Sign Out
                </p>
              </div>
            </li>
          </ul>
        ) : (
          <>
            <Link
              to="/register"
              className={`btn register-btn mr-4 my-4 ${isActive(
                history,
                "/register",
                true
              )}`}
            >
              Register
            </Link>
            <Link
              to="/login"
              className={`btn register-btn mr-4 my-4 ${isActive(
                history,
                "/login",
                true
              )}`}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Menu;
