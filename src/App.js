import React from "react";
import Appbar from "./component/Appbar";
import Search from "./component/Search";
import Card from "./component/Card";
import Buttons from "./component/Buttons";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container>
        <Appbar />
        <Box sx={{ mt: 10 }}>
          <Search />
          <Card />
          <Buttons />
        </Box>
      </Container>
    </div>
  );
}

export default App;
