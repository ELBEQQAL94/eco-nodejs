import React from "react";
import { isAuthenticated } from "../helpers/isAuthenticated";
// import { useSelector } from "react-redux";

function Profile() {
    //const state = useSelector(state => state.userState.user);
    const { user: { name, email, role}} = isAuthenticated();
    return (
        <div className="padding-60">
            <h4>Username</h4>
            <p>{name}</p>
            <h4>Email</h4>
            <p>{email}</p>
            <h4>Role</h4>
            <p>{role === 0 ?  "User" : "Admin"}</p>
            <h4>Purchase History</h4>
        </div>
    );
};

export default Profile;
