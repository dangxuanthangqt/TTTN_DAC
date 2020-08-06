import Authentication from "../layouts/authentication/Authentication";
import { lazy } from "react";
import Dashboard from "../layouts/dashboard/Dashboard";
import ErrorLayout from "../layouts/errors/ErrorLayout";

export const publicRoutes = [
  {
    layout: Authentication,
    subroutes: [
      {
        key: "login",
        path: "/auth/login",
        exact: true,
        component: lazy(() => import("../containers/login/Login")),
      },
      {
        key: "register",
        path: "/auth/register",
        exact: true,
        component: lazy(() => import("../containers/register/Register")),
      },
 
    ],
  },
  {
    layout: ErrorLayout,
    subroutes: [
      {
        key: "errror 404",
        exact: true,
        path: "/errors/error404",
        component: lazy(() => import("../containers/Error404/Error404")),
      },
      {
        key: "errror 403",
        exact: true,
        path: "/errors/error403",
        component: lazy(() => import("../containers/Error403/Error403")),
      },
    ],
  },
];
export const privateRoutes = [
  {
    layout: Dashboard,
    subroutes: [
      {
        key: "profile",
        exact: true,
        path: "/management/profile",
        component: lazy(() => import("../containers/Profile/Profile")),
      },
      {
        key: "campaign",
        exact: true,
        path: "/management/campaign",
        component: lazy(() => import("../containers/Campaign/Campaign")),
      },
      {
        key: "item",
        exact: true,
        path: "/management/item",
        component: lazy(() => import("../containers/Items/Items")),
      }
  
    ],
  },
];
export const privateRouteAdmin = [
  {
    layout: Dashboard,
    subroutes: [
      {
        key: "profile",
        exact: true,
        path: "/management/users",
        component: lazy(() => import("../containers/UserManagement/Usermanagement")),
      },
    ],
  },
];
