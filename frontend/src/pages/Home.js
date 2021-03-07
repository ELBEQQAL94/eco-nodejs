import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// ACTIONS
import { getProducts } from "../store/actions/products";

// TYPES
import { GET_PRODUCTS } from "../store/types/products";

// COMPONENTS
import Card from "../components/card/Card";

const Home = () => {
  const [productsBestSellers, setProductsBestSellers] = useState([]);
  const [productsArrivals, setProductsArrivals] = useState([]);

  const dispatch = useDispatch();

  const loadBestSellers = () => {
    getProducts("solde")
      .then((response) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data.products,
        });
        setProductsBestSellers(response.data.products);
      })
      .catch((error) => console.log(error.response.data));
  };

  const loadArrivals = () => {
    getProducts("createdAt", "desc", 3)
      .then((response) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data.products,
        });
        setProductsArrivals(response.data.products);
      })
      .catch((error) => console.log(error.response.data));
  };

  useEffect(() => {
    loadBestSellers();
    loadArrivals();
  }, []);

  return (
    <div>
      <h1>Arrival products</h1>
      <div className="row">
        {productsArrivals?.map((product) => (
          <div className="col-md-4" key={product._id}>
            <Card product={product} />
          </div>
        ))}
      </div>
      <hr />
      <h1>Best Sellers products</h1>
      <div className="row">
        {productsBestSellers?.map((product) => (
          <div className="col-md-4" key={product._id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
