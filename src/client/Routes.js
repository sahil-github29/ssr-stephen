import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";

export default () => (
  <div>
    <Route exec path="/" component={Home} />
    <Route exec path="/hi" component={() => "Hi"} />
  </div>
);
