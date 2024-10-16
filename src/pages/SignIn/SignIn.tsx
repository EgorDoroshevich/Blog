import React, { ChangeEvent, FC, useState } from "react";
import styles from "./SignIn.module.scss";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import FormPagesContainer from "../../components/FormPagesContainer";
import Input from "../../components/Input";
import { Theme } from "../../components/config";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignInSelectors, setUser } from "../../redux/store/slices/signInSlice";
import AppBar from "../../components/AppBar";

const SignIn = () => {
    const dispatch = useDispatch();

    const { themeValue } = useThemeContext();

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
        <div className={styles.container}>
            {/* <AppBar /> */}
            <FormPagesContainer
                title={"Sign In"}
                btnTitle={"Sign In"}
                onSubmit={onChangeSignIn}
                additionalInfo={
                    <div
                        className={classNames(styles.additionalInfo, {
                            [styles.darkAdditionalInfo]: themeValue === Theme.dark,
                        })}
                    >
                        {"Don’t have an account?"}
                        <span
                            onClick={onNavigateToSignUp}
                            className={classNames(styles.signUp)}
                        >
                            Sign Up
                        </span>
                    </div>
                }
            >
                <label className={styles.labelEmail}>Email</label>
                <input
                    title={"Email"}
                    placeholder={"Your email"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className={styles.email}
                />
                <div>
                    <label className={styles.labelPass}>Password</label>
                    <input
                        title={"Password"}
                        placeholder={"Your password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className={styles.password}
                    />
                    <div
                        className={classNames(styles.forgotPassword, {
                            [styles.darkForgotPassword]: themeValue === Theme.dark,
                        })}
                    >
                        Forgot password?
                    </div>
                </div>
            </FormPagesContainer>
        </div>
    );
};

export default SignIn;
