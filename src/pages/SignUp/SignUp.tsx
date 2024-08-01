import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import FormPagesContainer from "../../components/FormPagesContainer";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confpass, setConfpass] = useState("");

    const navigate = useNavigate();

    const onNavigateToSignIn = () => {
        navigate(RoutesList.SignIn);
    };

    const dataProp = { name, email, pass, confpass };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setPass('')
        setConfpass('')

    }
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
                    <Input
                        onChange={(e) => setName(name)}
                        title={"Name"}
                        placeholder={"Your name"}
                        value={dataProp.name}
                    />
                    <Input
                        onChange={() => { }}
                        title={"Email"}
                        placeholder={"Your email"}
                        value={dataProp.email}
                    />
                    <Input
                        onChange={() => { }}
                        title={"Password"}
                        placeholder={"Your password"}
                        value={dataProp.pass}
                    />
                    <Input
                        onChange={() => { }}
                        title={"Confirm password"}
                        placeholder={"Confirm password"}
                        value={dataProp.confpass}
                    />
                </FormPagesContainer>
            </div>
        </div>
    );
};

export default SignUp;
