import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Login from "./pages/Login";
import ShowMovie from "./pages/ShowMovie";
import { PrivateRoute, UnPrivateRoute } from "./service/PrivateRoute";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Switch>
        {/* main routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<ShowMovie />} />
        </Route>

        {/* auth routes  */}
        <Route path="/" element={<UnPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registre-se" element={<Login />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
