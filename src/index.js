import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainPage from "./components/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavPage from "./components/NavPage";
import SignIn from "./components/SignIn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/nav" element={<NavPage />} />
        </Routes>
    </BrowserRouter>
);
