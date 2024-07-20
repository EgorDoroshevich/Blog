import React, { ChangeEvent, useState } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";

type InputProps = {
  placeholder: string;
  value?: string | any;
  title: string;
  onChange: (value: string) => void;
  disablead?: boolean;
  className?: string;
};
const Input = ({
  placeholder,
  title,
  onChange,
  value,
  disablead,
}: InputProps) => {
  const { themeValue } = useThemeContext();

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  const inputProps = {
    onChange: onInputChange,
    value,
    placeholder,
  };
  return (
    <div >
      {!disablead ? (
        <div>
          <div
            className={classNames(styles.title, {
              [styles.darkTitle]: themeValue === Theme.dark,
            })}
          >
            {title}
          </div>
          <input
            className={classNames(styles.input, {
              [styles.darkInput]: themeValue === Theme.dark,
            })}
            {...inputProps}
          />
        </div>
      ) : (
        <div>
          <div
            className={classNames(styles.title, {
              [styles.darkTitle]: themeValue === Theme.dark,
            })}
          >
            {title}
          </div>
          <input
            className={classNames(styles.disablead, {
              [styles.darkDisabled]: themeValue === Theme.dark,
            })}
            {...inputProps}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
