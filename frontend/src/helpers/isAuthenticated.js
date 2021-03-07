export const isAuthenticated = () => {
  const jwt = JSON.parse(localStorage.getItem("jwt_info"));
  if (jwt) return jwt;
  return false;
};
