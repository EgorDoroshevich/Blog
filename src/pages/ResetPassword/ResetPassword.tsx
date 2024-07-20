import React from "react";
import FormPagesContainer from "../../components/FormPagesContainer";
import Input from "../../components/Input";
import Header from "../../components/Header";
import styles from "./ResetPassword.module.scss";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../../components/config";

const ResetPassword = () => {
    const { themeValue } = useThemeContext();
    return (
        <div>
            <Header />
            <div>
                <FormPagesContainer
                    title={"Reset Password"}
                    btnTitle={"Go to home"}
                    onSubmit={() => { }}
                >
                    <div
                        className={classNames(styles.text, {
                            [styles.darkText]: themeValue === Theme.dark,
                        })}
                    >
                        You will receive an email example@gmail.com with a link to reset
                        your password!
                    </div>
                    <Input
                        onChange={() => { }}
                        title={"Email"}
                        placeholder={"exemple@gmail.com"}
                    />
                </FormPagesContainer>
            </div>
        </div>
    );
};

export default ResetPassword;
