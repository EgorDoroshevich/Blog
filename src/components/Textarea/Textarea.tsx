import React, { ChangeEvent, FC, useState } from "react";
import styles from "./Textarea.module.scss";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../config";

type TextProps = {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    title: string;
};

const Textarea: FC<TextProps> = ({ value, placeholder, onChange, title }) => {
    const { themeValue } = useThemeContext();

    const onTextChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        onChange(event.target.value);
    };

    const textareaProps = {
        onChange: onTextChange,
        value,
        placeholder,
    };

    return (
        <div>
            <div>
                <div
                    className={classNames(styles.title, {
                        [styles.darkTitle]: themeValue === Theme.dark,
                    })}
                >
                    {title}
                </div>
                <textarea
                    className={classNames(styles.textarea, {
                        [styles.darkTextarea]: themeValue === Theme.dark,
                    })}
                    {...textareaProps}
                />
            </div>
        </div>
    );
};

export default Textarea;
