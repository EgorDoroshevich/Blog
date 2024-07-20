import React from "react";
import styles from "./SignUp.module.scss";
import FormPagesContainer from "../../components/FormPagesContainer";
import Input from "../../components/Input";
import Header from "../../components/Header";

const SignUp = () => {
    return (
        <div className={styles.signUp}>
            <div className={styles.signUpContainer}>
                <FormPagesContainer
                    title={"Sign Up"}
                    btnTitle={"Sign Up"}
                    onSubmit={() => { }}
                    additionalInfo={
                        <div className={styles.additionalInfo}>
                            {"Already have an account?"}
                            <span className={styles.signIn}>Sign In</span>
                        </div>
                    }
                >
                    <Input onChange={() => { }} title={"Name"} placeholder={"Your name"} />
                    <Input
                        onChange={() => { }}
                        title={"Email"}
                        placeholder={"Your email"}
                    />
                    <Input
                        onChange={() => { }}
                        title={"Password"}
                        placeholder={"Your password"}
                    />
                    <Input
                        onChange={() => { }}
                        title={"Confirm password"}
                        placeholder={"Confirm password"}
                    />
                </FormPagesContainer>
            </div>
        </div>
    );
};

export default SignUp;
