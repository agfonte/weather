import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import WeatherController from "./components/WeatherController";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/nav" element={<WeatherController />} />
        </Routes>
    </BrowserRouter>
);
