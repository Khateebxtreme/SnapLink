import React from 'react'
import ShortUrlPage from './components/ShortUrlPage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import PrivateRoute from './PrivateRoute';
import ErrorPage from './components/ErrorPage';
import QRify from './components/QRify';

const AppRouter = () => {
  const hideHeaderFooter = location.pathname.startsWith("/s")
  return (
    <>
      {!hideHeaderFooter && <NavBar />}
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/s/:url" element={<ShortUrlPage />} />
        <Route path="/qrify" element={<QRify />} />
        <Route path="/register" element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />

        <Route path="/dashboard" element={<PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
        <Route path="/error" element={<ErrorPage message="Error Occurred"/>} />
        <Route path="*" element={<ErrorPage message="We can't seem to find the page that is being looked for"/>} />

      </Routes>
      {!hideHeaderFooter && <Footer />}
  </>
  )
}

export default AppRouter

export const ShortDomainRouter = ()=>{
  return (
    <Routes>
        <Route path="/:url" element={<ShortUrlPage />} />
      </Routes>
  )
}