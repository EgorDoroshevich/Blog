import React, { useState } from "react";
import Tab, { TabsTypes } from "../Tab/Tab";
import styles from "./TabList.module.scss";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../config";

const TabList = () => {
    const [all, setAll] = useState<boolean>(true);
    const [favorite, setFavorite] = useState<boolean>(false);
    const [popular, setPopular] = useState<boolean>(false);

    const handelAll = () => {
        if (all === false) {
            setAll((prev) => !prev);
            setFavorite((prev) => false);
            setPopular((prev) => false);
            console.log(all);
        } else {
            setAll((prev) => prev);
            setFavorite((prev) => prev);
            setPopular((prev) => prev);
        }
    };
    const handleFavorite = () => {
        if (favorite === false) {
            setAll((prev) => false);
            setFavorite((prev) => !prev);
            setPopular((prev) => false);
        } else {
            setAll((prev) => prev);
            setFavorite((prev) => prev);
            setPopular((prev) => prev);
        }
    };

    const handlePopular = () => {
        if (popular === false) {
            setAll((prev) => false);
            setFavorite((prev) => false);
            setPopular((prev) => !prev);
        } else {
            setAll((prev) => prev);
            setFavorite((prev) => prev);
            setPopular((prev) => prev);
        }
    };

    const { themeValue } = useThemeContext();
    return (
        <div
            className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.dark,
            })}
        >
            <Tab
                active={all}
                onClick={handelAll}
                type={TabsTypes.All}
                title={"All"}
            />

            <Tab
                active={favorite}
                onClick={handleFavorite}
                type={TabsTypes.Myfavorites}
                title={"Myfavorites"}
            />
            <Tab
                active={popular}
                onClick={handlePopular}
                type={TabsTypes.Popular}
                title={"Popular"}
            />
        </div>
    );
};

export default TabList;
