import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const authData = useSelector((state: RootState) => {
    return state.auth.success;
  });
  console.log(authData);

  if(!authData) return <Navigate  to={"/signup"} replace={true}/>
return children
};

export default ProtectedRoutes;
