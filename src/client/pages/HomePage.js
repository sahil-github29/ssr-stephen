import React from "react";

const Home = () => (
  <div>
    I am home very very component.
    <button onClick={() => console.log("clicked")}>Press me</button>
  </div>
);

export default {
  component: Home,
};
