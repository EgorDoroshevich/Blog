import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import { useThemeContext } from "../../context/Theme";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/store/slices/signInSlice";
import Button from "../../components/Button";
import { ButtonSize } from "../../components/Button/Button";
import { Checkbox } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import classNames from "classnames";
import { Theme } from "../../components/config";
import SunnyIcon from "../../icons/SunnyIcon/SunnyIcon";
import Input from "../../components/Input";

const SignIn = () => {
    const dispatch = useDispatch();

    const { themeValue, onChangeTheme } = useThemeContext();

    const navigate = useNavigate();

    const onNavigateToSignUp = () => {
        navigate(RoutesList.SignUp);
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    })
                );
                console.log(user);
                navigate(RoutesList.Home);
            })
            .catch(() => alert("Invalid user"));
    };

    return (
        <div
            className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.dark,
            })}
        >
            <div
                className={classNames(styles.containerRight, {
                    [styles.darkContainerRight]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.theme, {
                        [styles.darkTheme]: themeValue === Theme.dark,
                    })}
                >
                    <Button
                        type={ButtonSize.themeButton}
                        onClick={
                            themeValue === Theme.light
                                ? onChangeTheme(Theme.dark)
                                : onChangeTheme(Theme.light)
                        }
                        title={
                            themeValue === Theme.light ? <DarkModeIcon /> : <SunnyIcon />
                        }
                    />
                </div>
                <h1
                    className={classNames(styles.header, {
                        [styles.darkHeader]: themeValue === Theme.dark,
                    })}
                >
                    Sign in
                </h1>
                <p
                    className={classNames(styles.signUp, {
                        [styles.darkSignUp]: themeValue === Theme.dark,
                    })}
                >
                    New to company?
                    <span
                        className={classNames(styles.span, {
                            [styles.darkSpan]: themeValue === Theme.dark,
                        })}
                        onClick={onNavigateToSignUp}
                    >
                        Sign up!
                    </span>
                </p>
                <Button
                    onClick={() => { }}
                    title={"Continue with Google"}
                    type={
                        themeValue === Theme.light
                            ? ButtonSize.google
                            : ButtonSize.googleDark
                    }
                    className={classNames(styles.google, {
                        [styles.darkGoogle]: themeValue === Theme.dark,
                    })}
                />
                <div
                    className={classNames(styles.containerRegister, {
                        [styles.darkContainerRegister]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.container_item, {
                            [styles.darkContainer_item]: themeValue === Theme.dark,
                        })}
                    >
                        <label
                            className={classNames(styles.label_email, {
                                [styles.darkLabel_email]: themeValue === Theme.dark,
                            })}
                        >
                            Email
                        </label>
                        <input
                            title={"Email"}
                            placeholder={"Your email"}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            className={classNames(styles.email__item, {
                                [styles.darkEmail__item]: themeValue === Theme.dark,
                            })}
                        />
                    </div>
                    <div
                        className={classNames(styles.container_item, {
                            [styles.darkContainer_item]: themeValue === Theme.dark,
                        })}
                    >
                        <label
                            className={classNames(styles.label__password, {
                                [styles.darkLabel__password]: themeValue === Theme.dark,
                            })}
                        >
                            Password
                        </label>
                        <input
                            title={"Password"}
                            placeholder={"Your password"}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            className={classNames(styles.password__item, {
                                [styles.darkPassword__item]: themeValue === Theme.dark,
                            })}
                        />
                    </div>
                </div>
                <div
                    className={classNames(styles.remember, {
                        [styles.darkRemember]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.checkbox, {
                            [styles.darkCheckbox]: themeValue === Theme.dark,
                        })}
                    >
                        <Checkbox
                            className={classNames(styles.checkbox, {
                                [styles.darkCheckbox]: themeValue === Theme.dark,
                            })}
                            defaultChecked
                        />
                        <p>Remember me</p>
                    </div>
                    <div
                        onClick={() => { }}
                        className={classNames(styles.forgotPassorword, {
                            [styles.darkForgotPassorword]: themeValue === Theme.dark,
                        })}
                    >
                        Forgot your password?
                    </div>
                </div>
                <div>
                    <Button
                        onClick={onChangeSignIn}
                        title={"Sign In"}
                        type={
                            themeValue === Theme.light
                                ? ButtonSize.large
                                : ButtonSize.largeDark
                        }
                        className={classNames(styles.signIn, {
                            [styles.darkSignIn]: themeValue === Theme.dark,
                        })}
                    />
                </div>
            </div>

            <div
                className={classNames(styles.containerImage, {
                    [styles.darkContainerImage]: themeValue === Theme.dark,
                })}
            >
                {themeValue === Theme.light ? (
                    <img src={require("../../images/whiteTheme.jpeg")} alt="mount" />
                ) : (
                    <img src={require("../../images/dark.jpeg")} alt="black" />
                )}
            </div>
        </div>
    );
};

export default SignIn;
