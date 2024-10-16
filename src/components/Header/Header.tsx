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

const Header = () => {
    const [burger, setBurger] = useState<boolean>(true);
    const [search, setSearch] = useState<boolean>(true);
    const [isLog, setIsLog] = useState<boolean>(true);

    const auth = getAuth(app);
    console.log(auth);

    const onClickBurger = () => {
        setBurger((prevState) => !prevState);
    };

    const onSearch = () => {
        setSearch((prevState) => !prevState);
    };

    const { themeValue } = useThemeContext();
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.headerButton}>
                    <Button
                        type={ButtonSize.headerButton}
                        title={burger === true ? <BurgerIcon /> : <CloseIcon />}
                        onClick={onClickBurger}
                    />
                    <div className={styles.rightButton}>
                        {search === false ? (
                            <Search onClick={onSearch} />
                        ) : (
                            <Button
                                type={ButtonSize.headerButton}
                                title={<SearchIcon />}
                                onClick={onSearch}
                            />
                        )}
                        {!auth ? (
                            <Button
                                type={ButtonSize.headerButton}
                                title={<ProfileIcon />}
                                onClick={() => { }}
                            />
                        ) : (
                            <UserName email={auth.currentUser?.email} />
                        )}
                    </div>
                </div>
            </div>
            {burger === false ? <AsideMenu /> : null}
        </div>
    );
};

export default Header;
