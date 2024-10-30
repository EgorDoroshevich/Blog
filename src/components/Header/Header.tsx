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
import { Theme } from "../config";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { UserSelectors } from "../../redux/store/slices/userSlice";

const Header = () => {
    const userName = useSelector(UserSelectors.getUser);
    const [name, setName] = useState(userName.name);
    const [burger, setBurger] = useState<boolean>(true);

    const onClickBurger = () => {
        setBurger((prevState) => !prevState);
    };

    useEffect(() => {
        setName(name);
    }, [userName]);

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
