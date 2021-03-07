// LIBS
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";

// CSS File
import "./CreateUser.css";

const CreateUser = ({ onSubmit, isShow }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h1 className="register-main-title">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isShow && (
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ref={register({
                  required: "Field is required",
                  minLength: {
                    value: 3,
                    message: "Name should be at-least 3 characters.",
                  },
                  maxLength: {
                    value: 200,
                    message: "Name should be less than 200 characters.",
                  },
                })}
                defaultValue=""
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <span className="text-danger">{message}</span>
                )}
              />
            </div>
          )}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Example@email.com"
              name="email"
              ref={register({
                required: "E-mail is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
              defaultValue=""
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <span className="text-danger">{message}</span>
              )}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              ref={register({
                required: "Password is required",
                // pattern: {
                //     value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/,
                //     message: "Password must be strong"
                // },
                minLength: {
                  value: 6,
                  message: "Password should be at-least 6 characters.",
                },
                maxLength: {
                  value: 200,
                  message: "Password should be less than 200 characters.",
                },
              })}
              defaultValue=""
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <span className="text-danger">{message}</span>
              )}
            />
          </div>
          <div className="padding-left-44 margin-top-30">
            <input
              type="checkbox"
              id="terms"
              className="custome-checkbox mr-4"
            />
            <label htmlFor="terms" className="label-checkbox">
              I agree to the
              <span className="pink-color mx-2">Terms</span>
              and
              <span className="pink-color mx-2">Privacy Policy.</span>
            </label>
          </div>
          {isShow ? (
            <div className="mt-4">
              <button className="btn register-btn active-btn mr-4 mb-4">
                Register
              </button>
              <Link className="btn register-btn mb-4" to="/login">
                Login
              </Link>
            </div>
          ) : (
            <div className="mt-4">
              <button className="btn register-btn active-btn mr-4 mb-4">
                Login
              </button>
              <Link className="btn register-btn mr-4 mb-4" to="/register">
                Register
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
