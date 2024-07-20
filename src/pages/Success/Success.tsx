import React from "react";
import styles from "./Success.module.scss";
import FormPagesContainer from "../../components/FormPagesContainer";
import Header from "../../components/Header";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../../components/config";
import classNames from "classnames";

function Success() {
    const { themeValue } = useThemeContext();
    return (
        <div>
            <div>
                <Header />
            </div>
            <FormPagesContainer
                title={"Success"}
                btnTitle={"Go to home"}
                onSubmit={() => { }}
            >
                <div
                    className={classNames(styles.emailText, {
                        [styles.darkEmailText]: themeValue === Theme.dark,
                    })}
                >
                    Email confirmed
                </div>
                <div
                    className={classNames(styles.text, {
                        [styles.darkText]: themeValue === Theme.dark,
                    })}
                >
                    Your registration is now completed
                </div>
            </FormPagesContainer>
        </div>
    );
}

export default Success;
