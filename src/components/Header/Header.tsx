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

const Header = () => {
    const [burger, setBurger] = useState<boolean>(true);
    const [search, setSearch] = useState<boolean>(true);

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
                        <Button
                            type={ButtonSize.headerButton}
                            title={<ProfileIcon />}
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </div>
            {burger === false ? <AsideMenu /> : null}
        </div>
    );
};

export default Header;
