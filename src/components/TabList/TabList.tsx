import React from "react";
import Tab, { TabsTypes } from "../Tab/Tab";
import styles from "./TabList.module.scss";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../config";

const TabList = () => {
    const { themeValue } = useThemeContext();
    return (
        <div
            className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.dark,
            })}
        >
            <Tab onClick={() => { }} type={TabsTypes.All} title={"All"} />
            <Tab
                onClick={() => { }}
                type={TabsTypes.Myfavorites}
                title={"Myfavorites"}
            />
            <Tab onClick={() => { }} type={TabsTypes.Popular} title={"Popular"} />
        </div>
    );
};

export default TabList;
