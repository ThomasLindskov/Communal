import React from "react";
import { Routes, Route } from "react-router-dom";
import EditProfilePage from "src/pages/editProfilePage/EditProfilePage";
import { forms } from "../pages/frontPage/FormContainer";
import FrontPage from "../pages/frontPage/FrontPage";
import { ChatsPage } from "../pages/chats/ChatsPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function RoutesTable() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<FrontPage form={forms.SignIn} />} />
        <Route path="/sign-up" element={<FrontPage form={forms.SignUp} />} />
        <Route
          path="/forgot-password"
          element={<FrontPage form={forms.ForgotPassword} />}
        />
      </Route>

      {/* Private routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
      </Route>
    </Routes>
  );
}
