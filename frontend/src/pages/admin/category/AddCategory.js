import { useState } from "react";
import { useDispatch } from "react-redux";
import { isAuthenticated } from "../../../helpers/isAuthenticated";
import toastr from "toastr";
import "toastr/build/toastr.css";
// ACTIONS
import { createCategory } from "../../../store/actions/categories";

// TYPES
import { CREATE_CATEGORY } from "../../../store/types/categories";

const AddCategory = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const {
    user: { _id: userId },
  } = isAuthenticated();

  const handleChange = (e) => setName(e.target.value);
  const submit = (e) => {
    e.preventDefault();
    createCategory({ name }, userId)
      .then((response) => {
        dispatch({
          type: CREATE_CATEGORY,
          payload: response.data,
        });
        setName("");
        toastr.success({}, "Category Created Successfully", {
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
            <label htmlFor="" className="text-muted">
              Add category
            </label>
            <input
              type="text"
              value={name}
              className="form-control"
              onChange={handleChange}
              placeholder="Add new category"
              autoFocus
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
