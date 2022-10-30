import React from "react";
import { Routes, Route } from "react-router-dom";
import { FrontPage } from "../pages/pages";

export default function RoutesTable() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      {/* TODO: refactor this */}
      {/* <Route path="SignIn" element={<SignIn />} /> */}
      {/* <Route path="SignUp" element={<SignUp />} /> */}
    </Routes>
  );
}
