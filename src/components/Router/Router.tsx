import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import Header from "../Header";
import Home from "../Home";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import AddPost from "../AddPost";
import RegistrationConfirmation from "../../pages/RegistrationConfirmation";
import MyFavorites from "../../pages/MyFavorites";

export enum RoutesList {
    Home = "/Home",
    SignUp = "/sign-up",
    SignIn = "/sign-in",
    RegistrationConfirmation = "/sign-up/confirm",
    AddPost = "/AddPost",
    Default = "*",
    Modal = "modal",
    MyFavorites = "myfavorites",
}

const AppRouter = () => {
    // const [user, setUser] = useState<boolean>(false);

    return (
        <div>
            <Routes>
                <Route path={RoutesList.Home} element={<Home />} />
                <Route path={RoutesList.Default} element={<SignIn />} />
                <Route path={RoutesList.SignUp} element={<SignUp />} />
                <Route
                    path={RoutesList.RegistrationConfirmation}
                    element={<RegistrationConfirmation />}
                />
                <Route path={RoutesList.AddPost} element={<AddPost />} />
                <Route path={RoutesList.Default} element={<MyFavorites />} />
                <Route path={RoutesList.MyFavorites} element={<MyFavorites />} />
            </Routes>

            {/* <Header /> */}
        </div>
    );
};

export default AppRouter;
