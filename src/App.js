import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import TopPoems from "./components/topPoems";
import SinglePoem from "./components/singlePoem";
import SharePoem from "./components/sharePoem";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={TopPoems} />
          <Route path="/poem/:id" component={SinglePoem} />
          <Route path="/share" component={SharePoem} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
