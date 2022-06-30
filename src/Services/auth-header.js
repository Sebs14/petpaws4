export default function authHeader() {
  const user = localStorage.getItem("token");
    return { Authorization: "Bearer" + user };
    // return { "x-auth-token": user.accessToken };
  return {};
}
