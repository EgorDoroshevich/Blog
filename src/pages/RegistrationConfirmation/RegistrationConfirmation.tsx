import React from "react";
import FormPagesContainer from "../../components/FormPagesContainer";
import Header from "../../components/Header";
import classNames from "classnames";
import styles from "./RegistrationConfirmation.module.scss";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../../components/config";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";

const RegistrationConfirmation = () => {
    const { themeValue } = useThemeContext();
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate(RoutesList.Home);
    };
    return (
        <div>
            <div>
                <FormPagesContainer
                    title={"Registration Confirmation"}
                    btnTitle={"Go to home"}
                    onSubmit={handleNavigateToHome}
                >
                    <div
                        className={classNames(styles.text, {
                            [styles.darkText]: themeValue === Theme.dark,
                        })}
                    >
                        <p>Registration completed successfully!</p>
                    </div>
                </FormPagesContainer>
            </div>
        </div>
    );
};
export default RegistrationConfirmation;
