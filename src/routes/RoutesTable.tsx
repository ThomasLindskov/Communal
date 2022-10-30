import React from 'react'
import { Routes, Route} from "react-router-dom";
import { UserGroup } from '../pages/frontPage/UserGroup';
import { Home, Front} from "../pages/pages";

export default function RoutesTable() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Uservalidate" element={<Front />} />
        <Route path="userGroup" element={<UserGroup />} />

    </Routes>
    )
}
