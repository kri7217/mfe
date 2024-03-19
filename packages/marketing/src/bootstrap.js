import React from "react";
import ReactDom from "react-dom";
import App from "./app";

const mount = el => {
  ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const node = document.querySelector("#marketing-node");
  if (node) {
    mount(node);
  }
}

export { mount };
