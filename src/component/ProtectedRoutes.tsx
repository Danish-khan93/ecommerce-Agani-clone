import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const authData = useSelector((state: RootState) => {
    return state.auth.success;
  });
  console.log(authData);

  return (
    <>{authData ? <Outlet/> : <Navigate to={"/signup"} replace={true} />}</>
  );
};

export default ProtectedRoutes;
