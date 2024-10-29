import React, { ChangeEvent, useState } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";

type InputProps = {
  placeholder: string;
  value?: string | any;
  title: string;
  onChange: (value: string | File) => void;
  disablead?: boolean;
  className?: string;
  type: string;
};
const Input = ({ placeholder, title, onChange, value, type }: InputProps) => {
  const { themeValue } = useThemeContext();

  const [text, setText] = useState<string>("");

  // const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (type === "file" && event.target.files?.[0]) {
  //     const file = event.target.files[0];
  //     const previewUrl = URL.createObjectURL(file);

  //     onChange(previewUrl); // Вызываем onChange с URL изображения
  //   } else {
  //     const textValue = event.target.value;
  //     setText(textValue);
  //     onChange(textValue); // Вызываем onChange с текстом
  //   }
  // };
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.type === "file") {
      const file = event.target.files?.[0]; // Получаем выбранный файл
      if (file) {
        console.log("File selected:", file); // Отладочный вывод
        onChange(file); // Передаем файл в onChange
      } else {
        console.error("No file selected"); // Если файл не выбран
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
