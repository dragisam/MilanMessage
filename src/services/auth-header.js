export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("accessToken"));

  if (user) {
    return {
      Authorization: "Bearer " + user,
      "Content-Type": "application/json",
    }; // for Spring Boot back-end
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}
