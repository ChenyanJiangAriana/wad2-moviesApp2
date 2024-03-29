import React ,{lazy,Suspense}from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom"    // CHANGED
const LoginApp= lazy(() => import("./login"));
const App = () => {
  return (
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
           <div><LoginApp/></div>
           </Suspense>
    </BrowserRouter>

  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
