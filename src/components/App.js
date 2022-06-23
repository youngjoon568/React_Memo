import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./css/main.css";
import ParentOne from './view/ParentOne';
import ParentTwo from './view/ParentTwo';

export default function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/parentone">ParentOne</Link>
      <Link to="/parenttwo">ParentTwo</Link>

      <Routes>
        <Route path="/parentone" element={<ParentOne />} />
        <Route path="/parenttwo" element={<ParentTwo />} />
      </Routes>
    </BrowserRouter>
  );
};
