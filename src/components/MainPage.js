import { Helmet } from 'react-helmet';
import React from "react";
import SignIn from "./SignIn";

function MainPage() {
    return (
        <div className="MainPage">
            <Helmet>
                <title>React | Login</title>
            </Helmet>
            <SignIn />
        </div>
    );
}

export default MainPage;