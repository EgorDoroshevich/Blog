import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Title.module.scss";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";

type TitleType = {
    title: string;
    className?: string;
};

const Title: FC<TitleType> = ({ title, className }) => {
    const { themeValue } = useThemeContext();
    return <div className={classNames(styles.title, { [styles.darkTitle]: themeValue === Theme.dark })}>{title}</div>;
};

export default Title;
