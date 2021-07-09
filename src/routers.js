import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
// import { isAuthenticated } from "./config/auth";
// import { useSelector } from "react-redux";
import history from "./config/history";

// Views
// list all views here

// const PrivateRoute = ({ ...data }) => {
//   if (!isAuthenticated()) {
//     return <Redirect to="/login" />;
//   }

//   List above all profiles
//   const hasAdmin = Object.keys(data).includes('admin') && !data.admin;

//   if (hasAdmin || hasCustomer) {
//     return <Redirect to="/" />;
//   }

//   return <Route {...data} />;
// };

const Routers = () => {
  // Gather from store the user profile
  // const isAdmin = (useSelector((state) => state.auth.user?.userType) === 'admin');

  return (
    <Router history={history}>
      <Switch>
        {/* Public Routes */}
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/product/:id" component={ProductCategory} /> */}

        {/* Private Routes */}
        {/* <PrivateRoute */}
        {/*   exact */}
        {/*   path="/userlist" */}
        {/*   admin={isAdmin} */}
        {/*   component={UserList} */}
        {/* /> */}

        {/* Default redirection */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routers;
