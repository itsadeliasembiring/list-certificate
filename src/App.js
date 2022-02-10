import React from "react";
import Navbar from "./component/Navbar/Navbar";
import ListSertifikat from "./component/ListSertifikat/ListSertifikat";
import DetailSertifikat from "./component/DetailSertifikat/DetailSertifikat";
import TambahSertifikat from "./component/TambahSertifikat/TambahSertifikat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ListSertifikat} />
          <Route path="/detail-sertifikat/:id" component={DetailSertifikat} />
          <Route path="/tambah" component={TambahSertifikat} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
