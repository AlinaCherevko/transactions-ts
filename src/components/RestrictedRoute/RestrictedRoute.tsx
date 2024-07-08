import { Navigate } from "react-router-dom";
import { useAuthZustant } from "../../store/store";

type Props = {
  children: React.ReactNode;
};

export const RestrictedRoute: React.FC<Props> = ({ children }) => {
  const { isAuth } = useAuthZustant();

  return isAuth ? <Navigate to="/transactions" replace /> : children;
};
