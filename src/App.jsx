import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import ShowMovie from "./pages/ShowMovie";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<ShowMovie />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
