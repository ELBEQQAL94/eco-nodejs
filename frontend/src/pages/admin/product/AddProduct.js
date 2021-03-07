import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isAuthenticated } from "../../../helpers/isAuthenticated";
import toastr from "toastr";
import "toastr/build/toastr.css";

// ACTIONS
import { createProduct } from "../../../store/actions/products";
import { getAllCategories } from "../../../store/actions/categories";

// TYPES
import { CREATE_PRODUCT } from "../../../store/types/products";
import { GET_ALL_CATEGORIES } from "../../../store/types/categories";

const AddProduct = () => {
  const defaultProduct = {
    photo: "",
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    shipping: false,
    category: 0,
  };

  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState(defaultProduct);
  const [formData, setFormData] = useState(new FormData());
  const dispatch = useDispatch();
  const {
    user: { _id: userId },
  } = isAuthenticated();

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: response.data,
        });
        setCategories(response.data.categories);
      })
      .catch((error) => console.log(error.response.data));
  }, []);

  const handleChange = (e) => {
    const value =
      e.target.name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(e.target.name, value);
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(product);
    createProduct(formData, userId)
      .then((response) => {
        dispatch({
          type: CREATE_PRODUCT,
          payload: response.data,
        });
        setProduct(defaultProduct);
        setFormData(new FormData());
        toastr.success({}, "Product Created Successfully", {
          positionClass: "toast-bottom-left",
        });
      })
      .catch((error) =>
        toastr.warning({}, JSON.stringify(error.response.data), {
          positionClass: "toast-bottom-left",
        })
      );
  };
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="photo">Upload Photo</label>
            <input
              onChange={handleChange}
              type="file"
              className="form-control-file"
              id="photo"
              name="photo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="text-muted">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={product.name}
              className="form-control"
              onChange={handleChange}
              placeholder="Product name"
              name="name"
              autoFocus
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="text-muted">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              row="10"
              className="form-control"
              onChange={handleChange}
              value={product.description}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="quantity" className="text-muted">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="form-control"
              onChange={handleChange}
              value={product.quantity}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="text-muted">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="form-control"
              onChange={handleChange}
              value={product.price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="text-muted">
              Categories
            </label>
            <select
              onChange={handleChange}
              name="category"
              id="category"
              className="form-control"
              value={product.category}
            >
              <option value="0">Select category</option>
              {categories &&
                categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="shipping" className="text-muted">
              Shipping
            </label>
            <select
              onChange={handleChange}
              name="shipping"
              id="shipping"
              className="form-control"
              value={product.shipping}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <button type="submit" className="btn btn-outline-primary btn-block">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
