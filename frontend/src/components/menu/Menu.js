// LIBS
import { Link, useHistory } from 'react-router-dom';

// NAV LINKS and AUTH LINKS
import { NAV_LINKS} from "./Links";

// CSS
import "./Menu.css";

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return "active";
    } else {
        return "";
    };
};

const Menu = () => {
    const history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg navbar-light menu">
            <Link className="navbar-brand" to="/">Ecommerce</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    {
                        NAV_LINKS.map(({id, title, path}) => (
                            <li key={id} className="nav-item">
                                <Link className="nav-link active" className={`nav-link ${isActive(history, path)}`} to={path}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/register" className="btn register-btn">Register</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/login" className="btn login-btn">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
