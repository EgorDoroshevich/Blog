import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import FormPagesContainer from "../../components/FormPagesContainer";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");

    const navigate = useNavigate();

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
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                navigate(RoutesList.RegistrationConfirmation);
                console.log("User created:", userCredential.user);
            } catch (error) {
                console.error("Error creating user:", error);
            }
        }
    };

    return (
        <div className={styles.signUp}>
            <div className={styles.signUpContainer}>
                <FormPagesContainer
                    title={"Sign Up"}
                    btnTitle={"Sign Up"}
                    onSubmit={handleSubmit}
                    additionalInfo={
                        <div className={styles.additionalInfo}>
                            {"Already have an account?"}
                            <span onClick={onNavigateToSignIn} className={styles.signIn}>
                                Sign In
                            </span>
                        </div>
                    }
                >
                    <label className={styles.labelEmail}>Name</label>
                    <input
                        name="login"
                        onChange={(e: any) => setName(e.target.value)}
                        title={"Name"}
                        placeholder={"Enter your name"}
                        value={name}
                        type="text"
                        className={styles.email}
                    />
                    <p></p>
                    <label className={styles.labelEmail}>Email</label>
                    <input
                        name="email"
                        onChange={(e: any) => setEmail(e.target.value)}
                        title={"Email"}
                        placeholder={"Enter your email"}
                        value={email}
                        type="email"
                        className={styles.email}
                    />
                    <p></p>
                    <label className={styles.labelPass}>Password</label>
                    <input
                        name="password"
                        onChange={(e: any) => setPassword(e.target.value)}
                        title={"Password"}
                        placeholder={"Enter your password"}
                        value={password}
                        type="password"
                        className={styles.password}
                    />
                    <p></p>
                    <label className={styles.lableConf}>Confirm password</label>
                    <input
                        onChange={(e: any) => setConfpassword(e.target.value)}
                        title={"Confirm password"}
                        placeholder={"Confirm password"}
                        value={confpassword}
                        type="password"
                        className={styles.confpassword}
                    />
                    <p></p>
                </FormPagesContainer>
            </div>
        </div>
    );
};

export default SignUp;
