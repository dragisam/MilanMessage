import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8088/api/";

class AdminService {
  static register(body) {
    let userData = localStorage.getItem("app_user_data");
    let token = JSON.parse(userData);

    return axios.post("/users/signup", body, { authHeader });
  }

  static login(body) {
    console.log("body=", body);
    return axios.post("users/signin", body);
  }

  static logout(history) {
    localStorage.removeItem("app_user_data");
    history.push("/");
  }

  static storeUserData(user_data) {
    localStorage.setItem("app_user_data", JSON.stringify(user_data));
  }

  static getUserAuthData() {
    let userData = localStorage.getItem("app_user_data");
    return userData ? JSON.parse(userData) : null;
  }

  static getReport(body) {
    let userData = localStorage.getItem("app_user_data");
    let token = JSON.parse(userData);

    return axios.post("/report", body, { authHeader });
  }

  static login(body) {
    console.log("body=", body);
    return axios.post(`${API_URL}users/signin`, body);
  }
  //    const getAdminUsers=() {
  //       console.log("pozvana", authHeader());
  //       //return axios.get(`${API_URL}admin/users`, { headers: authHeader() });
  //       return axios.get("http://localhost:8088/api/admin/users", {
  //         headers: authHeader(),
  //       });
  //     }
  getAdminUsers() {
    console.log("pozvana", authHeader());
    return axios.get(`${API_URL}admin/users`, {
      headers: authHeader(),
      "Content-Type": "application/json",
    });
  }
}

export default new AdminService();
