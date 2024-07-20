import React from "react";
import FormPagesContainer from "../../components/FormPagesContainer";
import Header from "../../components/Header";
import classNames from "classnames";
import styles from "./RegistrationConfirmation.module.scss";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../../components/config";

const RegistrationConfirmation = () => {
    const { themeValue } = useThemeContext();
    return (
        <div>
            <div>
                <FormPagesContainer
                    title={"Registration Confirmation"}
                    btnTitle={"Go to home"}
                    onSubmit={() => { }}
                >
                    <div
                        className={classNames(styles.text, {
                            [styles.darkText]: themeValue === Theme.dark,
                        })}
                    >
                        <p>
                            Please activate your account with the activation link in the email
                            example@gmail.com.
                        </p>
                        <p> Please, check your email</p>
                    </div>
                </FormPagesContainer>
            </div>
        </div>
    );
};
export default RegistrationConfirmation;
