import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Home, SignIn, SignUp} from "../pages/pages";

export default function RoutesTable() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
    </Routes>
    )
}
