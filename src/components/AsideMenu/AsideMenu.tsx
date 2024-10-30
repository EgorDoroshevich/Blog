import React, { useState } from "react";
import styles from "./AsideMenu.module.scss";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";
import classNames from "classnames";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/store/slices/userSlice";
import SunnyIcon from "../../icons/SunnyIcon/SunnyIcon";
import { RouteSelectors, setRoute } from "../../redux/store/slices/routeSlice";
import Loading from "../Loading";

const AsideMenu = () => {
    const dispatch = useDispatch();
    const toggle = useSelector(RouteSelectors.getRoute);

    const navigate = useNavigate();

    const { themeValue, onChangeTheme } = useThemeContext();

    const onClickHome = () => {
        navigate(RoutesList.Home);
    };
    const onNavigateToAddPost = () => {
        navigate(RoutesList.AddPost);
    };
    const onClickMyFavorites = () => {
        navigate(RoutesList.MyFavorites);
    };

    const onClickLogOut = () => {
        dispatch(removeUser());
        dispatch(setRoute(false));
        navigate(RoutesList.SignIn);
    };
    return (
        <div
            className={classNames(styles.asideMenu, {
                [styles.darkAsideMenu]: themeValue === Theme.dark,
            })}
        >
            <div
                className={classNames(styles.container, {
                    [styles.darkContainer]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.buttons, {
                        [styles.darkButtons]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.asideMenuButtons, {
                            [styles.darkAsideMenuButtons]: themeValue === Theme.dark,
                        })}
                    >
                        <Button
                            onClick={onClickHome}
                            title={"Home"}
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.aside
                                    : ButtonSize.darkAside
                            }
                        />
                        <Button
                            onClick={() => { }}
                            title={"Modal"}
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.aside
                                    : ButtonSize.darkAside
                            }
                        />
                        <Button
                            onClick={onNavigateToAddPost}
                            title={"Add Post"}
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.aside
                                    : ButtonSize.darkAside
                            }
                        />
                        <Button
                            onClick={() => { }}
                            title={"All"}
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.aside
                                    : ButtonSize.darkAside
                            }
                        />
                        <Button
                            onClick={() => { }}
                            title={"MyFavorites"}
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.aside
                                    : ButtonSize.darkAside
                            }
                        />
                        <Button
                            onClick={() => { }}
                            title={"Popular"}
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.aside
                                    : ButtonSize.darkAside
                            }
                        />
                    </div>
                    <div
                        className={classNames(styles.bottomButtons, {
                            [styles.darkBottomButtons]: themeValue === Theme.dark,
                        })}
                    >
                        <div
                            className={classNames(styles.themeButtons, {
                                [styles.darkThemeButtons]: themeValue === Theme.dark,
                            })}
                        >
                            <Button
                                title={
                                    themeValue === Theme.light ? <DarkModeIcon /> : <SunnyIcon />
                                }
                                type={ButtonSize.aside}
                                onClick={
                                    themeValue === Theme.light
                                        ? onChangeTheme(Theme.dark)
                                        : onChangeTheme(Theme.light)
                                }
                            />
                        </div>
                        <div
                            className={classNames(styles.logout, {
                                [styles.darkLogOut]: themeValue === Theme.dark,
                            })}
                        >
                            <Button
                                onClick={onClickLogOut}
                                title={"Log Out"}
                                type={
                                    themeValue === Theme.light
                                        ? ButtonSize.aside
                                        : ButtonSize.darkAside
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideMenu;
