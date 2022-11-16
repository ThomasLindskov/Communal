import React from "react";
import { Routes, Route } from "react-router-dom";
import { FrontPage, MainPage } from "../pages/pages";

export default function RoutesTable() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/home" element={<MainPage />} />
      {/* TODO: refactor this */}
      {/* <Route path="SignIn" element={<SignIn />} /> */}
      {/* <Route path="SignUp" element={<SignUp />} /> */}
    </Routes>
  );
}
