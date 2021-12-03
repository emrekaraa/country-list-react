import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CountryDetail from "./components/CountryDetail";

import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryCode" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
