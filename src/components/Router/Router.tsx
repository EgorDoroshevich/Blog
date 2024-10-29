import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "../Home";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import AddPost from "../AddPost";
import RegistrationConfirmation from "../../pages/RegistrationConfirmation";
import MyFavorites from "../../pages/MyFavorites";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import AsideMenu from "../AsideMenu";

export enum RoutesList {
    Home = "/home",
    SignUp = "/sign-up",
    SignIn = "/sign-in",
    RegistrationConfirmation = "/sign-up/confirm",
    AddPost = "/add-post",
    AsideMenu = "/aside-menu",
    Default = "*",
    MyFavorites = "/myfavorites",
}

const AppRouter = () => {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(true);
    };
    const handleLogout = () => {
        setLogin((prevState) => !prevState);
    };
    console.log(login);
    const guestRoutes = (
        <Routes>
            <Route
                path={RoutesList.SignIn}
                element={<SignIn setLogin={handleLogin} />}
            />
            {/* <Route path={RoutesList.Home} element={<Home />} /> */}
            <Route path={RoutesList.SignUp} element={<SignUp />} />
            <Route
                path={RoutesList.Default}
                element={<SignIn setLogin={handleLogin} />}
            />
        </Routes>
    );

    const userRoutes = (
        <div>
            {/* <AsideMenu onLogout={handleLogout} /> */}
            <Routes>
                <Route path={RoutesList.Home} element={<Home />} />
                <Route
                    path={RoutesList.RegistrationConfirmation}
                    element={<RegistrationConfirmation />}
                />
                <Route
                    path={RoutesList.AsideMenu}
                    element={<AsideMenu onLogout={handleLogout} />}
                />
                <Route path={RoutesList.AddPost} element={<AddPost />} />
                <Route path={RoutesList.MyFavorites} element={<MyFavorites />} />
                <Route path={RoutesList.Default} element={<Home />} />
            </Routes>
        </div>
    );

    return <div>{login === true ? userRoutes : guestRoutes}</div>;
};

export default AppRouter;
