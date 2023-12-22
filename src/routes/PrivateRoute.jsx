import { Navigate } from "react-router-dom";
import { getToken } from "../redux/selectors";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const token = useSelector(getToken);

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
