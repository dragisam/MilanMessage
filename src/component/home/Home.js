import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import AuthContext from "../../context/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../services/auth.service";
import jwt_decode from "jwt-decode";

import authHeader from "../../services/auth-header";
import axios from "../../api/axios";

//import authHeader from "./../../services/auth-header";

const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkcmFnaXNhIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTY3MDM1MjU2MywiZXhwIjoxNjcwMzU5NzYzfQ.d0zSeDKRPT4M4IvRQhke0_mRSHHZZDJdQ5vUvnw0k8E";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const apiUrl = "http://localhost:8088/api/admin/users";
const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const userStore = useSelector((store) => store.userStore);
  const navigate = useNavigate();
  const token = AuthService.getToken();
  const decToken = jwt_decode(token);
  //const [decToken, setDecToken] = useState();
  // const decToken = jwt_decode(token);
  //const roles = decToken.roles[0].authority;
  const getDecToken = () => {
    if (token) {
      //setDecToken(jwt_decode(token));
      console.log("radii=", token);
    }
  };
  const isAdmin = () => {
    return decToken.roles[0].authority === "ROLE_ADMIN";
  };
  const getUsers = useCallback(async () => {
    console.log("u pozivu");
    try {
      const response = await axios.get(
        "http://localhost:8088/api/admin/users",
        { headers: authHeader() }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error, "greska u axios");
    }
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      // let decToken = jwt_decode(userStore);
      //let roles = decToken.roles[0].authority;
      getDecToken();
      console.log("admin", isAdmin());
      onLoginF();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // setUsers(response.data);
  // console.log(response.data);

  // const getUsers = () =>
  //   AdminService.getAdminUsers().then((response) => {
  //     console.log("u pozivu");
  //     // setUsers(response.data);
  //     console.log(response.data);
  //   });
  const onLoginF = () => {
    fetch("http://localhost:8088/api/admin/users", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",

        "Cache-Control": "no-cache",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkcmFnaXNhIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTY3MDYyNzUwMiwiZXhwIjoxNjcwNjM0NzAyfQ.JeZ9I_6Dq7qIHbF30PXgkUm7qPXBCIDpwaSpkmmPCaY",
      },
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  };
  async function getUser() {
    try {
      const config = {
        headers: { Authorization: authHeader() },
      };
      const response = await axios({
        method: "get",
        url: "http://localhost:8088/api/admin/users",
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const logout = async () => {
    setAuth({});
    navigate("/linkpage");
  };

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/editor">Go to the Editor page</Link>
      <br />
      <Link to="/admin">Go to the Admin page</Link>
      <br />
      <Link to="/lounge">Go to the Lounge</Link>
      <br />
      <Link to="/linkpage">Go to the link page</Link>
      <div className="flexGrow">
        <button onClick={logout}>Sign Out</button>
        <button
          onClick={() => {
            console.log("button");
          }}
        >
          users
        </button>
      </div>
    </section>
  );
};

export default Home;
