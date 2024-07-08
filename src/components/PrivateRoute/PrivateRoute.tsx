import { Navigate } from "react-router-dom";
import { useAuthZustant } from "../../store/store";
type Props = {
  children: React.ReactNode;
};

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuth } = useAuthZustant();

  return isAuth ? children : <Navigate to={"/login"} replace />;
};
