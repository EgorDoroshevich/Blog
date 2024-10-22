import React, { FC } from "react";
import styles from "./UserName.module.scss";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../config";

type UserProps = {
    email: any;
};

const UserName: FC<UserProps> = ({ email }) => {
    const { themeValue } = useThemeContext();
    return (
        <div>
            <div
                className={classNames(styles.container, {
                    [styles.darkContainer]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.name, {
                        [styles.darkName]: themeValue === Theme.dark,
                    })}
                >
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserName;
