import React, { ChangeEvent, useState } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";

type InputProps = {
  placeholder: string;
  value?: string | File;
  title: string;
  onChange: (value: string | File) => void;
  disablead?: boolean;
  className?: string;
  type: string;
};
const Input = ({ placeholder, title, onChange, value, type }: InputProps) => {
  const { themeValue } = useThemeContext();

  const [text, setText] = useState<string>("");
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === "file") {
      const file = event.target.files?.[0];
      if (file) {
        console.log("File selected:", file);
        onChange(file);
      }
    } else {
      setText(event.target.value);
    }
  };

  const inputProps = {
    onChange: onInputChange,
    value: type === "file" ? undefined : text,
    placeholder,
    type,
  };
  return (
    <div>
      {
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
      }
    </div>
  );
};

export default Input;
