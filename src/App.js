import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import routes from "./routes";
import MainPage from "./components/MainPage";
import SignIn from "./components/SignIn";
import {Routes, useRoutes} from "react-router-dom";
import Link from "@mui/material/Link";
import NavPage from "./components/NavPage";

function App() {
    // const routing = useRoutes(routes);
    return (
        <MainPage />
    );
}

export default App;
