import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/Home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
type routesType = {
  path: string;
  page?: React.ReactNode;
};
function routes() {
  const routes: routesType[] = [
    {
      path: "/",
      page: <HomePage />,
    },
    {
      path: "/SignIn",
      page: <SignInPage />,
    },
    {
      path: "/SignUp",
      page: <SignUpPage />,
    },
  ];
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.path === "/" ? <Layout>{route.page}</Layout> : route.page
            }
          ></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default routes;
