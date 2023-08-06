import { PathRouteProps } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import SecondPage from "../pages/second/imageDataPage";

export interface PathRoutePropsProtected extends PathRouteProps {
  protectedAdmin?: boolean;
  protectedTopUser?: boolean;
}

const routes: PathRoutePropsProtected[] = [
  { path: "/", element: <HomePage /> },
  { path: "results", element: <SecondPage /> },
];

export default routes;