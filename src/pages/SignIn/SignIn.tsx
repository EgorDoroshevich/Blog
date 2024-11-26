import React, { useEffect, useState } from "react";
import styles from "./SignIn.module.scss";
import { useThemeContext } from "../../context/Theme";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from "../../components/Button";
import { ButtonSize } from "../../components/Button/Button";
import { Checkbox } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import classNames from "classnames";
import { Theme } from "../../components/config";
import SunnyIcon from "../../icons/SunnyIcon/SunnyIcon";
import Loading from "../../components/Loading";
import { setUserSignIn } from "../../redux/store/slices/userSlice";
import { setRoute } from "../../redux/store/slices/routeSlice";
type SignInProps = {
    setLogin: () => void;
};

const SignIn = ({ setLogin }: SignInProps) => {
    const dispatch = useDispatch();
    const { themeValue, onChangeTheme } = useThemeContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false); // доделать!
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            dispatch(
                setUserSignIn({
                    name: user.name,
                    email: user.email,
                    id: user.id,
                    token: user.token,
                })
            );
            navigate(RoutesList.Home);
        }
    }, [dispatch, navigate]);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password) {
            alert("Please enter both email and password");
            setLoading(false);
            return;
        }
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const { user } = userCredential;
            console.log(user);
            const token = await user.getIdToken();
            // console.log("Saved token:", token);

            if (rememberMe === true) {
                dispatch(setRoute(true));
                const userData = {
                    name: user.displayName || "",
                    email: user.email || "",
                    id: user.uid,
                    token: token,
                };
                localStorage.setItem("user", JSON.stringify(userData));

                console.log("User saved in LocalStorage:", userData);
            } else {
                localStorage.removeItem("user");
                console.log("User removed from LocalStorage");
            }
            dispatch(
                setUserSignIn({
                    name: user.displayName || "",
                    email: user.email || "",
                    id: user.uid,
                    token: token,
                })
            );
            setLoading(false);
            setLogin();
            navigate(RoutesList.Home);
        } catch (error: any) {
            setLoading(false);

            if (error.code === "auth/user-not-found") {
                alert("User not found. Please sign up.");
            } else if (error.code === "auth/wrong-password") {
                alert("Incorrect password. Please try again.");
            } else {
                alert("Error during sign-in: " + error.message);
            }
        }
        navigate(RoutesList.Home);
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
                        <div className={styles.theme}>
                            <Button
                                type={ButtonSize.themeButton}
                                onClick={() =>
                                    onChangeTheme(
                                        themeValue === Theme.light ? Theme.dark : Theme.light
                                    )
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

                        <p className={styles.signUp}>
                            New to company?
                            <span
                                className={classNames(styles.span, {
                                    [styles.darkSpan]: themeValue === Theme.dark,
                                })}
                                onClick={() => navigate(RoutesList.SignUp)}
                            >
                                Sign up!
                            </span>
                        </p>
                        <Button
                            onClick={() => { }}
                            title="Continue with Google"
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.google
                                    : ButtonSize.googleDark
                            }
                            className={styles.google}
                        />
                        <div className={styles.containerRegister}>
                            <div className={styles.container_item}>
                                <label className={styles.label_email}>Email</label>
                                <input
                                    title="Email"
                                    placeholder="Your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    className={styles.email__item}
                                />
                            </div>

                            <div className={styles.container_item}>
                                <label className={styles.label__password}>Password</label>
                                <input
                                    title="Password"
                                    placeholder="Your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    className={styles.password__item}
                                />
                            </div>
                        </div>

                        <div className={styles.remember}>
                            <div className={styles.checkbox}>
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <p>Remember me</p>
                            </div>
                            <div className={styles.forgotPassword} onClick={() => { }}>
                                Forgot your password?
                            </div>
                        </div>

                        <Button
                            onClick={handleSignIn}
                            title="Sign In"
                            type={ButtonSize.large}
                            className={styles.signIn}
                        />
                    </div>

                    <div className={styles.containerImage}>
                        <img
                            src={
                                themeValue === Theme.light
                                    ? require("../../images/whiteTheme.jpeg")
                                    : require("../../images/dark.jpeg")
                            }
                            alt={themeValue === Theme.light ? "mount" : "black"}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;
