import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";
import { ButtonSize } from "../../components/Button/Button";
import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Theme } from "../../components/config";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import Button from "../../components/Button";
import { Checkbox } from "@mui/material";
import SunnyIcon from "../../icons/SunnyIcon/SunnyIcon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { setUserSignUp } from "../../redux/store/slices/userSlice";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

type SignUpProps = {
    setSignUp: () => void;
};

const SignUp = ({ setSignUp }: SignUpProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const { themeValue, onChangeTheme } = useThemeContext();

    const dispatch = useDispatch();
    const onNavigateToSignIn = () => {
        navigate(RoutesList.SignIn);
    };

    const handleSubmit = async () => {
        const auth = getAuth(app);
        if (password !== confpassword) {
            alert("пароли не совпадают");
        } else if (password === "") {
            alert("введите пароль");
        } else {
            setLoading(true);
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                if (userCredential.user) {
                    console.log(name);
                    await updateProfile(userCredential.user, {
                        displayName: name,
                    });
                    const user = userCredential.user;
                    console.log(user);
                    dispatch(
                        setUserSignUp({
                            auth,
                            email,
                            password,
                            name,
                        })
                    );
                    const response = await fetch(
                        "https://myth-p-default-rtdb.firebaseio.com/name.json",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(name),
                        }
                    );
                }
                const dataUser = { email, password, auth, name };
                setSignUp();
                navigate(RoutesList.RegistrationConfirmation);
                console.log("User created:", userCredential.user);
            } catch (error) {
                console.error("Error creating user:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
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
                            Sign up
                        </h1>
                        <p
                            className={classNames(styles.signUp, {
                                [styles.darkSignUp]: themeValue === Theme.dark,
                            })}
                        >
                            Do you have an account?
                            <span
                                className={classNames(styles.span, {
                                    [styles.darkSpan]: themeValue === Theme.dark,
                                })}
                                onClick={onNavigateToSignIn}
                            >
                                Sign in!
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
                                    className={classNames(styles.label, {
                                        [styles.darkLabel]: themeValue === Theme.dark,
                                    })}
                                >
                                    Name
                                </label>
                                <input
                                    title={"Name"}
                                    placeholder={"Your name"}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    className={classNames(styles.input__item, {
                                        [styles.darkInput__item]: themeValue === Theme.dark,
                                    })}
                                />
                            </div>
                            <div
                                className={classNames(styles.container_item, {
                                    [styles.darkContainer_item]: themeValue === Theme.dark,
                                })}
                            >
                                <label
                                    className={classNames(styles.label, {
                                        [styles.darkLabel]: themeValue === Theme.dark,
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
                                    className={classNames(styles.input__item, {
                                        [styles.darkInput__item]: themeValue === Theme.dark,
                                    })}
                                />
                            </div>
                            <div
                                className={classNames(styles.container_item, {
                                    [styles.darkContainer_item]: themeValue === Theme.dark,
                                })}
                            >
                                <label
                                    className={classNames(styles.label, {
                                        [styles.darkLabel]: themeValue === Theme.dark,
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
                                    className={classNames(styles.input__item, {
                                        [styles.darkInput__item]: themeValue === Theme.dark,
                                    })}
                                />
                            </div>

                            <div
                                className={classNames(styles.container_item, {
                                    [styles.darkContainer_item]: themeValue === Theme.dark,
                                })}
                            >
                                <label
                                    className={classNames(styles.label, {
                                        [styles.darkLabel]: themeValue === Theme.dark,
                                    })}
                                >
                                    Confirm password
                                </label>
                                <input
                                    title={"Confirm password"}
                                    placeholder={"Your password"}
                                    onChange={(e) => setConfpassword(e.target.value)}
                                    value={confpassword}
                                    type="password"
                                    className={classNames(styles.input__item, {
                                        [styles.darkInput__item]: themeValue === Theme.dark,
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
                                onClick={handleSubmit}
                                title={"Sign Up"}
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
            )}
        </div>
    );
};

export default SignUp;
