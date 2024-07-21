import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import FormPagesContainer from "../../components/FormPagesContainer";
import Input from "../../components/Input";
import { Theme } from "../../components/config";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { themeValue } = useThemeContext();

    const navigate = useNavigate();

    const onNavigateToSignUp = () => {
        navigate(RoutesList.SignUp);
    };


    return (
        <div>
            <FormPagesContainer
                title={"Sign In"}
                btnTitle={"Sign In"}
                onSubmit={() => { }}

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
                <Input
                    title={"Email"}
                    placeholder={"Your email"}
                    onChange={setEmail}
                    value={email}
                />
                <div>
                    <Input
                        title={"Password"}
                        placeholder={"Your password"}
                        onChange={setPassword}
                        value={password}
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
