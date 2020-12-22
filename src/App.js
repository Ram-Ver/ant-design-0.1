import React from "react";
import PublicRoute from "./components/PublicRoute";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./containers/Admin";
import forgetPassword from "./containers/forgetPassword";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <>
      <PublicRoute>
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/forget-password" component={forgetPassword} />
          <Route exact path="/product-detail/:id" component={ProductDetail} />
        </Switch>
        <PrivateRoute exact path="/admin" component={() => <Admin />} />
      </PublicRoute>
    </>
  );
}

export default App;
