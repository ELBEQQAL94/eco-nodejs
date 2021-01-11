// LIBS
import { Link } from "react-router-dom";

// CSS
import "./Home.css";

const Home = () => {
    return (
        <div className="jumbotron main-home">
            <h1 className="display-4">Hello, User</h1>
            <p className="lead">This is a simple hero unit, a simple ecommerce project build on MERN Stack</p>
            <hr className="my-4" />
            <Link className="btn btn-primary btn-lg" to="/shop">Shop</Link>
        </div>
    );
};

export default Home;
