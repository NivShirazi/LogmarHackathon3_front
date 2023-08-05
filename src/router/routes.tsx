import { PathRouteProps } from "react-router-dom";

export interface PathRoutePropsProtected extends PathRouteProps {
  protectedAdmin?: boolean;
  protectedTopUser?: boolean;
}

const routes: PathRoutePropsProtected[] = [
  { path: "/", element: <h1> home </h1> },
  { path: "second", element: <h1> second page </h1> },
];

export default routes;