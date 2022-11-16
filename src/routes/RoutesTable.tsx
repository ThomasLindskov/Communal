import React from "react";
import { Routes, Route } from "react-router-dom";
import { forms } from "../pages/frontPage/FormContainer";
import FrontPage from "../pages/frontPage/FrontPage";
import MainPage from '../pages/mainPage/MainPage';



export default function RoutesTable() {
  return (

    <Routes>
    {/* TODO: Add new all new routes here */}
      <Route path="/" element={<FrontPage form={forms.SignIn}/>} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/sign-up" element={<FrontPage form={forms.SignUp} />} />
      <Route path="/forgot-password" element={<FrontPage form={forms.ForgotPassword} />}
      />
    </Routes>
  );
}
