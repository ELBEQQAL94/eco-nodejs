// LIBS
import { Link } from "react-router-dom";

// COMPONENTS
import ShowImage from "../show-image/ShowImage";

const Card = ({ product }) => {
  return (
    <div className="card my-2">
      <div className="card-header">
        <h4>{product.name}</h4>
      </div>
      <div className="card-body">
        <ShowImage product={product} classname="card-img-top" />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Link to="">
          <button className="btn btn-warning mr-1">View product</button>
        </Link>
        <button className="btn btn-success">Add to card</button>
      </div>
    </div>
  );
};

export default Card;
