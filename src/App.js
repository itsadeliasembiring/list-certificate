import React from "react";
import ListSertificate from "./pages/ListSertificate";
import DetailSertificate from "./pages/DetailSertificate";
import AddSertificate from "./pages/AddSertificate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ListSertificate} />
          <Route path="/detail-sertificate/:id" component={DetailSertificate} />
          <Route path="/add-sertificate" component={AddSertificate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
