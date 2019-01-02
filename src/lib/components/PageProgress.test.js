import React from "react";
import ReactDOM from "react-dom";
import PageProgress from "./PageProgress";

it("PageProgress renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PageProgress />, div);
});
