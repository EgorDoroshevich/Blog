import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Button from "../Button";
import BurgerIcon from "../../icons/Burger/Burger";
import { ButtonSize } from "../Button/Button";
import { useThemeContext } from "../../context/Theme/Context";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import AsideMenu from "../AsideMenu";
import Search from "../Search";
import UserName from "../UserName";
import app from "../../firebase";
import { getAuth } from "firebase/auth";
import { Theme } from "../config";
import classNames from "classnames";
import axios from "axios";

const Header = () => {
    const [burger, setBurger] = useState<boolean>(true);
    const [name, setName] = useState("");

    const auth = getAuth(app);
    console.log(auth);

    const onClickBurger = () => {
        setBurger((prevState) => !prevState);
    };

    useEffect(() => {
        const getName = async () => {
            const response = await axios(
                "https://myth-p-default-rtdb.firebaseio.com/name.json"
            );
            const data = response.data;
            const userName = Object.values(data)[1]; // Подумать как подтягивать имя коректно!
            if (typeof userName === "string") {
                setName(userName);
            } else {
                console.error("Полученные данные не являются строкой");
            }
        };
        getName();
        console.log(name);
    }, []);

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
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.headerButton
                                    : ButtonSize.darkHeaderButton
                            }
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
                        <UserName name={name} />
                    </div>
                </div>
            </div>
            {burger === false ? <AsideMenu /> : null}
        </div>
    );
};

export default Header;
