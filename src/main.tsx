import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  About,
  Home,
  Shop,
  Contact,
  Product,
  NotFound,
  SignUp,
  Login,
  Cart,
} from "./pages";
import Layout from "./LayOut/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// @ts-ignore
const authData = JSON.parse(localStorage.getItem("userToken"));
console.log(authData);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "products/:productid",
        element: <Product />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/signup",
        element: authData ? <Navigate to={"/"} replace={true} /> : <SignUp />,
      },
      {
        path: "/login",
        element: authData ? <Navigate to={"/"} replace={true} /> : <Login />,
      },
      {
        path: "/cart",
        element: authData ? (
          <Cart />
        ) : (
          <Navigate to={"/signup"} replace={true} />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
