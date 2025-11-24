import { createBrowserRouter, Navigate } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import FindPartners from "../Pages/FindPartners";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import CreatePartnerProfile from "../Pages/CreatePartnerProfile";
import PrivateRouter from "./PrivateRouter";
import MyConnections from "../Pages/MyConnections";
import MyProfile from "../Components/MyProfile";
import StudyPartnerDetails from "../Components/StudyPartnerDetails";
import axios from "axios";
import Spinner from "../Components/Spinner";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/find-partners",
        Component: FindPartners,
      },
      {
        path: "/create-partner-profile",
        element: (
          <PrivateRouter>
            <CreatePartnerProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-connections",
        element: (
          <PrivateRouter>
            <MyConnections />
          </PrivateRouter>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRouter>
            <MyProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/partner/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://study-mate-server-two.vercel.app/partner-details/${params.id}`
          ),
        hydrateFallbackElement: <Spinner />,
        element: (
          <PrivateRouter>
            <StudyPartnerDetails />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to={"/auth/login"}></Navigate>,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
export default router;
