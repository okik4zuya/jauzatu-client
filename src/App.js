import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Admin, Switcher } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Switcher />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/:slug' element={<Switcher />} />
      </Routes>
    </Router>
  );
}
