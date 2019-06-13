import React from "react";
import propTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import styles from "./styles.scss";
import Auth from "components/Auth";
import Footer from "components/Footer";
 const App = props => [
  //Nav,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypes = {
    isLoggedIn: propTypes.bool.isRequired
};
 const PrivateRoutes = props => (
<Router>
  <Switch>
    <Route key="1" exact path="/" render={() => "feed"} />,
    <Route key="2" path="/explore" render={() => "explore"} />
  </Switch>
</Router>
);
 const PublicRoutes = props => (
 <Router>
  <Switch>
    <Route exact path="/" component={Auth} />,
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
</Router>
);
 export default App;
