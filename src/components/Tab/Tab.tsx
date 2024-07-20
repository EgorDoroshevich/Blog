import React, { FC } from "react";
import styles from "./Tab.module.scss";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";

export enum TabsTypes {
    All = "all",
    Myfavorites = "myfavorites",
    Popular = "popular",
}

type TabsProps = {
    type: TabsTypes;
    title: string;
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
};

const Tab: FC<TabsProps> = ({ type, title, onClick, active, disabled }) => {
    const tabtypes = styles[type];
    const { themeValue } = useThemeContext();
    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={classNames(tabtypes, {
                [styles.active]: active,
                [styles.disabled]: disabled,
                [styles.darkTab]: themeValue === Theme.dark,
            })}
        >
            {title}
        </div>
    );
};

export default Tab;
