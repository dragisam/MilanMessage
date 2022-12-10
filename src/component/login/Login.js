import "../../App.css";
import { Formik, Field } from "formik";
import { useState, useEffect, useRef } from "react";

import jwt_decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthService from "../../services/auth.service";

import LoginSchema from "../../schema/LoginSchema";
import { setUser } from "../../store/action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [errMsg, setErrMsg] = useState("");
  const userRef = useRef();
  const errRef = useRef();
  const onLogin = (values) => {
    AuthService.login(
      JSON.stringify({
        username: values.username,
        password: values.password,
      })
    )
      .then((response) => {
        console.log("los unos1");
        if (response.data) {
          let decToken = jwt_decode(response.data);
          let roles = decToken.roles[0].authority;
          if (roles === "ROLE_ADMIN" || roles === "ROLE_USER") {
            AuthService.storeToken(response.data);
            console.log("response.data", response.data);
            dispatch(setUser(response.data));
            values.username = "";
            values.password = "";
            navigate("/home");
          } else {
            AuthService.logout();
            console.log("los unos");
            navigate(from, { replace: true });
          }
        }
      })
      .catch((err) => {
        console.log(err.response, "greska");
        if (!err.response) {
          setErrMsg("No Server Response");
        } else if (err.response.status === 400) {
          setErrMsg("Wrong or missing Username or Password");
        } else if (err.response.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      });
  };

  useEffect(() => {
    console.log("location", from);
  }, []);
  return (
    <>
      {
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ username: "", password: "" }}
          onSubmit={onLogin}
          // onSubmit={async (values) => {
          //   try {
          //     axios
          //       .post(
          //         LOGIN_URL,
          //         JSON.stringify({
          //           username: values.username,
          //           password: values.password,
          //         }),
          //         {
          //           headers: { "Content-Type": "application/json" },
          //         }
          //       )
          //       .then((response) => {
          //         if (response.data) {
          //           localStorage.setItem(
          //             "accessToken",
          //             JSON.stringify(response.data)
          //           );
          //           let decToken = jwt_decode(response.data);
          //           let roles = decToken.roles[0].authority;
          //           setRole(roles);
          //           console.log(
          //             "token=",
          //             decToken.roles[0].authority,
          //             "role=",
          //             role
          //           );
          //         }
          //       });

          //     // console.log("response=", JSON.stringify(response?.data));
          //     // const accessToken = response?.data;
          //     // const user = values.username;
          //     // const password = values.username;
          //     // setAuth({ user, password, accessToken });

          //     setSuccess(true);
          //     values.username = "";
          //     values.password = "";
          //     navigate("/home");
          //   } catch (err) {
          //     console.log(err);
          //   }
          // }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="login">
              <div className="form">
                <form noValidate onSubmit={handleSubmit}>
                  <span>Login</span>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="Enter email id / username"
                    className="form-control "
                    id="username"
                  />

                  <p className="error">
                    {errors.username && touched.username && errors.username}
                  </p>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <button type="submit">Login</button>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                </form>
              </div>
            </div>
          )}
        </Formik>
      }
    </>
  );
};

export default Login;
