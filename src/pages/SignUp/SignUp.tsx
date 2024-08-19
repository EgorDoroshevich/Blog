import React, { FormEvent, useEffect, useState } from "react";
import styles from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import FormTest from "../FormTest";
import { initializeApp } from "firebase/app";

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
    const [mail, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onNavigateToSignIn = () => {
        navigate(RoutesList.SignIn);
    };

    const data = { mail, pass };

    const handleSubmit = async (email: string, password: string) => {
        const auth = getAuth(app);

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
    };

    return (
        <div className={styles.signUp}>
            <FormTest handleSubmit={handleSubmit} title={"weljf"} />
            {/* <div className={styles.signUpContainer}>
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
                    <Input
                        onChange={(e) => setName(name)}
                        title={"Name"}
                        placeholder={"Your name"}
                        value={name}
                    />
                    <Input
                        onChange={(e) => setEmail(mail)}
                        title={"Email"}
                        placeholder={"Your email"}
                        value={mail}
                    />
                    <Input
                        onChange={(e) => setPass(pass)}
                        title={"Password"}
                        placeholder={"Your password"}
                        value={pass}
                    />
                    <Input
                        onChange={() => { }}
                        title={"Confirm password"}
                        placeholder={"Confirm password"}
                        value={"dataProp.confpass"}
                    />
                </FormPagesContainer>
            </div> */}
        </div>
    );
};

// const handleSubmit = (email: any, password: any) => {
//     const auth = getAuth();
//     console.log(auth)
//     createUserWithEmailAndPassword(auth, email, password)
//         .then(console.log)
//         .catch(console.error);
// };

export default SignUp;
