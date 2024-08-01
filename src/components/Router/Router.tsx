import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Header from "../Header";
import Home from "../Home";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import AddPost from "../AddPost";
import RegistrationConfirmation from "../../pages/RegistrationConfirmation";
import Modal from "../Modal";

export enum RoutesList {
    Home = "/Home",
    SignUp = "/sign-up",
    SignIn = "/sign-in",
    RegistrationConfirmation = "/sign-up/confirm",
    AddPost = "AddPost",
    Default = "*",
    Modal = "modal,",
}

const AppRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path={RoutesList.Home} element={<Home />} />
                <Route path={RoutesList.SignIn} element={<SignIn />} />
                <Route path={RoutesList.SignUp} element={<SignUp />} />
                <Route
                    path={RoutesList.RegistrationConfirmation}
                    element={<RegistrationConfirmation />}
                />
                <Route path={RoutesList.AddPost} element={<AddPost />} />
                <Route path={RoutesList.Default} element={<Home />} />
                <Route path={RoutesList.Modal} element={<Modal />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
