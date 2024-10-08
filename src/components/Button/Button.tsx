import React, { ReactElement } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export enum ButtonSize {
    small = "small",
    middle = "middle",
    large = "large",
    headerButton = "headerButton",
    delete = "delete",
    cancel = "cancel",
    aside = 'aside',
    themeButton = 'themeButton'
}
type ButtonProps = {
    type: ButtonSize;
    title: string | ReactElement;
    onClick: (e: any) => void;
    disabled?: boolean;
    icon?: ReactElement | undefined;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ title, onClick, disabled, type }) => {
    const buttonSize = styles[type];
    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={classNames(buttonSize, { [styles.disabled]: disabled })}
        >
            {title}
        </div>
    );
};
export default Button;
