import React, { FC, ReactElement, useState } from "react";
import styles from "./Search.module.scss";
import Input from "../Input";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";

type SearchProps = {
    onClick: () => void;
};
const Search: FC<SearchProps> = ({ onClick }) => {
    const { themeValue } = useThemeContext();

    return (
        <div className={classNames(styles.search, {
            [styles.darkSearch]: themeValue === Theme.dark
        })}>
            <input
                className={classNames(styles.inputSearch, {
                    [styles.darkInputSearch]: themeValue === Theme.dark,
                })}
                placeholder={"Search ..."}
            />
        </div>
    );
};

export default Search;
