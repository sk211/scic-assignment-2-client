import React from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import initalizeAuthentaction from "../Firebase/firebase.init";
// import "./Login.css";

initalizeAuthentaction();
const Login = () => {
  const { user, signInGoogle, signInUser, isLoading, authError } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.password, location, history);
    reset();
  };

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogin = () => {
    signInGoogle(location, history);
    history.push(redirect_uri);
  };

  return (
    <div className="col-lg-5 px-3  mx-auto col-sm-12 my-5" id="loginFrom">
      <div className="col-md-8 offset-2">
        <h3 className="text-center py-3">Login </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="form-control mb-3"
            placeholder="Email"
          />
          <input
            type="password"
            {...register("password", { required: true })}
            className="form-control mb-3"
            placeholder="password"
          />

          {errors.exampleRequired && (
            <span className="text-danger">This field is required</span>
          )}

          <input
            type="submit"
            className="btn btn-block w-100 btn-success"
            value="Login"
          />
          <div className="d-grid ">
            <Button
              variant="danger"
              onClick={handleGoogleLogin}
              size="md"
              className="mb-4 mt-2 "
            >
              <i class="fab fa-google mr-2  btn-block"></i>
              <span> Google Login</span>
            </Button>
          </div>
        </form>
      </div>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {user?.email && (
        <Alert severity="success">
          {" "}
          Login
          <strong>User Successfully</strong>
        </Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default Login;
