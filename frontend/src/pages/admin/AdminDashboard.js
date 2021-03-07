import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { isAuthenticated } from "../../helpers/isAuthenticated";

const AdminDashboard = () => {
  // const state = useSelector((state) => state.userState.user);
  const {
    user: { name, email, role },
  } = isAuthenticated();
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="padding-60">
          <h4>Username</h4>
          <p>{name}</p>
          <h4>Email</h4>
          <p>{email}</p>
          <h4>Role</h4>
          <p>{role === 0 ? "User" : "Admin"}</p>
        </div>
      </div>
      <div className="col-md-6">
        <Link to="/admin/category/add-category">Create Category</Link>
        <Link to="/admin/product/add-product">Create Product</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
