import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <div className="text-danger">
        <h3>
          Due to some privacy issue, you have to signin here.
          <br />
          Please Sign in with Google
        </h3>
      </div>
      <button className="btn btn-success m-5" onClick={handleGoogleLogin}>
        Google Sign in
      </button>

      <br />
    </div>
  );
};

export default Login;
