import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Popular from "./movies/Popular";
import Kids from "./movies/Kids";
import BestDramas from "./movies/BestDramas";
import ComedyMovies from "./movies/ComedyMovies";
import ScienceFiction from "./movies/ScienceFiction";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Profile from "./auth/Profile";
import SendMail from "./auth/forgotPass/SendMail";
import ChangePass from "./auth/forgotPass/ChangePass";

import Error from "./Error";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/popular-movies" element={<Popular />} />
        <Route path="/comedy-movies" element={<ComedyMovies />} />
        <Route path="/science-movies" element={<ScienceFiction />} />
        <Route path="/kids-movies" element={<Kids />} />
        <Route path="/best-dramas" element={<BestDramas />} />

        <Route path="/register-form" element={<Register />} />
        <Route path="/login-form" element={<Login />} />
        <Route path="/profile-page" element={<Profile />} />
        <Route path="/send-otp-form" element={<SendMail />} />
        <Route path="/reset-password-form" element={<ChangePass />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
