import React from "react";
import ListCertificate from "./Pages/ListCertificate";
import DetailCertificate from "./Pages/DetailCertificate";
import AddCertificate from "./Pages/AddCertificate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ListCertificate} />
          <Route path="/detail-certificate/:id" component={DetailCertificate} />
          <Route path="/add-certificate" component={AddCertificate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
