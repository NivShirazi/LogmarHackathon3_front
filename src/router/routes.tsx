import { PathRouteProps } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import SecondPage from "../pages/second/secondPage";

export interface PathRoutePropsProtected extends PathRouteProps {
  protectedAdmin?: boolean;
  protectedTopUser?: boolean;
}

const routes: PathRoutePropsProtected[] = [
  { path: "/", element: <HomePage /> },
  { path: "second", element: <SecondPage /> },
];

export default routes;