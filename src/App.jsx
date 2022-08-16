import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
