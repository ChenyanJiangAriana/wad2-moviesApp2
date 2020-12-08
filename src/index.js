import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom"    // CHANGED
import LoginApp from "./login";

const App = () => {
  return (
      <BrowserRouter>
           <div><LoginApp/></div>
    </BrowserRouter>

  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
