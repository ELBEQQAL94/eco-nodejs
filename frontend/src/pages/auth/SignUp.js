// LIBS
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.css";

// ACTIONS
import { signUpAction } from "../../store/actions/user";

// TYPES
import { SIGNUP_USER } from "../../store/types/auth";

// COMPONENTS
import CreateUser from "../../components/create-user/CreateUser";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const signUp = (user) => {
    signUpAction(user)
      .then((response) => {
        dispatch({
          type: SIGNUP_USER,
          payload: response.data,
        });
        history.push("/login");
        toastr.success({}, "User Created Successfully", {
          positionClass: "toast-bottom-left",
        });
      })
      .catch((error) =>
        toastr.warning({}, error.response.data.message, {
          positionClass: "toast-bottom-left",
        })
      );
  };

  return <CreateUser onSubmit={signUp} isShow />;
};

export default SignUp;
