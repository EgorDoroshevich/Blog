import React, { useState } from "react";
import styles from "./AsideMenu.module.scss";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import SunnyIcon from "../../icons/SunnyIcon/SunnyIcon";
import MoonIcon from "../../icons/MoonIcon/MoonIcon";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";

const AsideMenu = () => {
    const { themeValue, onChangeTheme } = useThemeContext();

    const navigate = useNavigate();

    const onClickHome = () => {
        navigate(RoutesList.Home);
    };
    const onNavigateToAddPost = () => {
        navigate(RoutesList.AddPost);
    };
    const onNavigateToSignIn = () => {
        navigate(RoutesList.SignIn);
    };
    const onNavigateToSignUp = () => {
        navigate(RoutesList.SignUp);
    };

    return (
        <div>
            <div
                className={classNames(styles.container, {
                    [styles.darkContainer]: themeValue === Theme.dark,
                })}
            >
                <div className={styles.name}></div>
                <div className={styles.buttons}>
                    <div className={styles.asideMenuButtons}>
                        <Button
                            onClick={onClickHome}
                            title={"Home"}
                            type={ButtonSize.aside}
                        />
                        <Button
                            onClick={onNavigateToAddPost}
                            title={"Add Post"}
                            type={ButtonSize.aside}
                        />
                        <Button
                            onClick={onNavigateToSignIn}
                            title={"Sign In"}
                            type={ButtonSize.aside}
                        />
                        <Button
                            onClick={onNavigateToSignUp}
                            title={"Sign Up"}
                            type={ButtonSize.aside}
                        />
                        <Button onClick={() => { }} title={"All"} type={ButtonSize.aside} />
                        <Button
                            onClick={() => { }}
                            title={"MyFavorites"}
                            type={ButtonSize.aside}
                        />
                        <Button
                            onClick={() => { }}
                            title={"Popular"}
                            type={ButtonSize.aside}
                        />
                    </div>
                    <div className={styles.bottomButtons}>
                        <div className={styles.themeButtons}>
                            <div
                                className={classNames(styles.ligthTheme, {
                                    [styles.darkLightTheme]: themeValue === Theme.dark,
                                })}
                            >
                                <Button
                                    onClick={onChangeTheme(Theme.light)}
                                    title={<SunnyIcon />}
                                    type={ButtonSize.themeButton}
                                />
                            </div>
                            <div
                                className={classNames(styles.darkTheme, {
                                    [styles.dark]: themeValue === Theme.dark,
                                })}
                            >
                                <Button
                                    onClick={onChangeTheme(Theme.dark)}
                                    title={<MoonIcon />}
                                    type={ButtonSize.themeButton}
                                />
                            </div>
                        </div>
                        <div className={styles.logout}>
                            <Button
                                onClick={() => { }}
                                title={"Log Out"}
                                type={ButtonSize.aside}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideMenu;
