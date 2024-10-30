import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import AddPost from "../AddPost";
import RegistrationConfirmation from "../../pages/RegistrationConfirmation";
import MyFavorites from "../../pages/MyFavorites";
import AsideMenu from "../AsideMenu";
import { useDispatch, useSelector } from "react-redux";
import { RouteSelectors, setRoute } from "../../redux/store/slices/routeSlice";

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
    const dispatch = useDispatch();
    const toggle = useSelector(RouteSelectors.getRoute);

    const handleLogin = () => {
        dispatch(setRoute(true));
    };

    const guestRoutes = (
        <Routes>
            <Route
                path={RoutesList.SignIn}
                element={<SignIn setLogin={handleLogin} />}
            />
            <Route
                path={RoutesList.SignUp}
                element={<SignUp setSignUp={handleLogin} />}
            />
            <Route
                path={RoutesList.Default}
                element={<SignIn setLogin={handleLogin} />}
            />
        </Routes>
    );

    const userRoutes = (
        <div>
            <Routes>
                <Route path={RoutesList.Home} element={<Home />} />
                <Route
                    path={RoutesList.RegistrationConfirmation}
                    element={<RegistrationConfirmation />}
                />
                <Route path={RoutesList.AsideMenu} element={<AsideMenu />} />
                <Route path={RoutesList.AddPost} element={<AddPost />} />
                <Route path={RoutesList.MyFavorites} element={<MyFavorites />} />
                <Route path={RoutesList.Default} element={<Home />} />
            </Routes>
        </div>
    );

    return <div>{toggle === true ? userRoutes : guestRoutes}</div>;
};

export default AppRouter;
