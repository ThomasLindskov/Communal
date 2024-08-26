import React from "react";
import { Routes, Route } from "react-router-dom";
import EditProfilePage from "src/pages/editProfilePage/EditProfilePage";
import { forms } from "../pages/frontPage/FormContainer";
import FrontPage from "../pages/frontPage/FrontPage";
import { ChatsPage } from "../pages/chatPage/ChatsPage";
import NotFoundPage from "../pages/NotFoundPage";

import { PrivateRoutes } from "./PrivateRoutes";



const routes = {
  public: [
    { path: '/', element: <FrontPage form={forms.SignIn} /> },
    { path: '/sign-up', element: <FrontPage form={forms.SignUp} /> },
    { path: '/forgot-password', element: <FrontPage form={forms.ForgotPassword} /> },
  ],
  private: [
    { path: '/chats', element: <ChatsPage /> },
    { path: '/edit-profile', element: <EditProfilePage /> },
  ],
};

export default function RoutesTable() {
  return (
    <Routes>
      {/* Public routes */}
      {routes.public.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {/* Private routes */}
      <Route element={<PrivateRoutes />}>
        {routes.private.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      {/* 404 route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
