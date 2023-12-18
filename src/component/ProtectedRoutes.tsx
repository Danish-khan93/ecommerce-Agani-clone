// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { Navigate } from "react-router-dom";

// const ProtectedRoutes = ({ children,path }: { children: JSX.Element,path:string }) => {
//   const authData = useSelector((state: RootState) => {
//     return state.auth.success;
//   });
//   console.log(authData);

//   return <>{authData ? children : <Navigate to={path} replace={true} />}</>;
// };

// export default ProtectedRoutes;
