import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Landing from "../src/components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Router>
      </Provider>
    </>
  );
};

export default App;
