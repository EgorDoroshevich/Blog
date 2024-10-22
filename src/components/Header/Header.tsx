import React, { FC, ReactElement, useContext, useState } from "react";
import styles from "./Header.module.scss";
import Button from "../Button";
import BurgerIcon from "../../icons/Burger/Burger";
import SearchIcon from "../../icons/SearchIcon/SearchIcon";
import ProfileIcon from "../../icons/ProfileIcon/ProfileIcon";
import { ButtonSize } from "../Button/Button";
import ThemeContext, { useThemeContext } from "../../context/Theme/Context";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import AsideMenu from "../AsideMenu";
import Search from "../Search";
import UserName from "../UserName";

import app from "../../firebase";
import { getAuth } from "firebase/auth";
import { Theme } from "../config";
import classNames from "classnames";

const Header = () => {
    const [burger, setBurger] = useState<boolean>(true);
    // const [search, setSearch] = useState<boolean>(true);

    const auth = getAuth(app);
    console.log(auth);

    const onClickBurger = () => {
        setBurger((prevState) => !prevState);
    };

    // const onSearch = () => {
    //     setSearch((prevState) => !prevState);
    // };

    const { themeValue } = useThemeContext();
    return (
        <div
            className={classNames(styles.header, {
                [styles.darkHeader]: themeValue === Theme.dark,
            })}
        >
            <div
                className={classNames(styles.container, {
                    [styles.darkContainer]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.headerButton, {
                        [styles.darkHeaderButton]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.burger, {
                            [styles.darkBurger]: themeValue === Theme.dark,
                        })}
                    >
                        <Button
                            type={themeValue === Theme.light
                                ? ButtonSize.headerButton
                                : ButtonSize.darkHeaderButton}
                            title={burger === true ? <BurgerIcon /> : <CloseIcon />}
                            onClick={onClickBurger}
                        />
                    </div>
                    <div
                        className={classNames(styles.search, {
                            [styles.darkSearch]: themeValue === Theme.dark,
                        })}
                    >
                        <Search onClick={() => { }} />
                    </div>
                    <div
                        className={classNames(styles.username, {
                            [styles.darkUsername]: themeValue === Theme.dark,
                        })}
                    >
                        <UserName email={"asd"} />
                    </div>
                </div>
            </div>
            {burger === false ? <AsideMenu /> : null}
        </div>
    );
};

export default Header;
