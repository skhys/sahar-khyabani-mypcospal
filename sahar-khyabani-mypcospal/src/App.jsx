import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "../src/components/Header/Header";
import FormPage from "../src/pages/FormPage/FormPage";
import HomePage from "../src/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="date/:dateId" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
