import axios from "axios";

const API_URL = "http://localhost:8088/api";

class AuthService {
  login(body) {
    return axios.post(API_URL + "/user/signin", body, {
      headers: { "Content-Type": "application/json" },
    });
  }
  storeToken(token) {
    localStorage.setItem("accessToken", JSON.stringify(token));
  }
  getToken() {
    if (!!localStorage.getItem("accessToken")) {
      return localStorage.getItem("accessToken");
    } else {
      console.log("nema");
      return;
    }
  }

  logout() {
    localStorage.removeItem("accessToken");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("accessToken"));
  }
}

export default new AuthService();
