import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Home, SignIn, SignUp} from "../pages/pages";

export default function routes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
    </Routes>
    )
}
