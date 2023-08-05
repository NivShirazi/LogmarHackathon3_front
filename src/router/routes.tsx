import { PathRouteProps } from "react-router-dom";
import HomePage from "../pages/home/homePage";

export interface PathRoutePropsProtected extends PathRouteProps {
  protectedAdmin?: boolean;
  protectedTopUser?: boolean;
}

const routes: PathRoutePropsProtected[] = [
  { path: "/", element: <HomePage /> },
  { path: "second", element: <h1> second page </h1> },
];

export default routes;