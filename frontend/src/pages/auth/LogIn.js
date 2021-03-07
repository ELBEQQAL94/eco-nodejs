// LIBS
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.css";

// ACTIONS
import { loginAction } from "../../store/actions/user";

// TYPES
import { LOGIN_USER } from "../../store/types/auth";

// COMPONENTS
import CreateUser from "../../components/create-user/CreateUser";

const LogIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const login = (user) => {
    loginAction(user)
      .then((response) => {
        dispatch({
          type: LOGIN_USER,
          payload: response.data,
        });
        localStorage.setItem("jwt_info", JSON.stringify(response.data));
        history.push("/");
        toastr.info({}, "Welcome!", { positionClass: "toast-bottom-left" });
      })
      .catch((error) =>
        toastr.warning({}, error.response.data.message, {
          positionClass: "toast-bottom-left",
        })
      );
  };

  return <CreateUser onSubmit={login} />;
};

export default LogIn;
