import { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

const routesMapped: JSX.Element[] = routes.map((routeData) => {
  return (
    <Fragment key={routeData.path}>
      <Route path={routeData.path} element={routeData.element} />
    </Fragment>
  );
});

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1> loading </h1>}>
        <Routes>{routesMapped}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};