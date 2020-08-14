import React from "react";
import styles from "./App.module.scss";
import Tasks from "./pages/tasks/";
import Users from "./pages/users/";
import Navbar from "./components/Navbar";
import { StaticKitProvider } from '@statickit/react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home/";
import Contact from "./pages/Contact/";

const App = () => {
  return (
    <StaticKitProvider site="{your-site-id}">
    <Router>
        <Navbar/>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
    </StaticKitProvider>
  );
};

export default App;
