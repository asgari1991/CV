import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Main from "../components/Main/Main";
import SampleGallery from "../components/SampleGallery/SampleGallery";
import CV from "../components/CV/CV";
import NotFound from "../components/shared/NotFound";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Main/>}/>
      <Route path="/gallery" element={<SampleGallery/>}/>
      <Route path="/cv" element={<CV/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AnimatePresence>
  );
}
