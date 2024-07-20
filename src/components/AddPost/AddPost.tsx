import React from "react";
import styles from "./AddPost.module.scss";
import FormPagesContainer from "../FormPagesContainer";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import Input from "../Input";
import Textarea from "../Textarea";
import Title from "../Title";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../config";

type AddPostProps = {
    title: string;
};

const AddPost = () => {
    const { themeValue } = useThemeContext();
    return (
        <div
            className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.dark,
            })}
        >
            <div
                onClick={() => { }}
                className={classNames(styles.home, {
                    [styles.darkHome]: themeValue === Theme.dark,
                })}
            >
                <p
                    className={classNames(styles.homeP, {
                        [styles.darkHomeP]: themeValue === Theme.dark,
                    })}
                >
                    Home
                </p>
            </div>
            <div
                className={classNames(styles.title, {
                    [styles.darkTitle]: themeValue === Theme.dark,
                })}
            >
                <Title title={"Add Post"} />
            </div>
            <div
                className={classNames(styles.form, {
                    [styles.darkForm]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.inputTitle, {
                        [styles.darkInputTitle]: themeValue === Theme.dark,
                    })}
                >
                    <Input onChange={() => { }} title={"Title"} placeholder={"title"} />
                </div>
                <div
                    className={classNames(styles.inputImage, {
                        [styles.darkInputImage]: themeValue === Theme.dark,
                    })}
                >
                    <Input
                        placeholder={"lesson"}
                        title={"lesson number"}
                        onChange={() => { }}
                    />
                    <Input placeholder={"image"} title={"Image"} onChange={() => { }} />
                </div>
                <div
                    className={classNames(styles.description, {
                        [styles.darkDescription]: themeValue === Theme.dark,
                    })}
                >
                    <Textarea
                        title={"Description"}
                        onChange={() => { }}
                        value=""
                        placeholder=""
                    />
                </div>
                <div
                    className={classNames(styles.text, {
                        [styles.darkText]: themeValue === Theme.dark,
                    })}
                >
                    <Textarea
                        title={"Text"}
                        onChange={() => { }}
                        value=""
                        placeholder=""
                    />
                </div>
            </div>

            <div
                className={classNames(styles.btnButtons, {
                    [styles.darkBtnButtons]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.leftButton, {
                        [styles.darkLeftButton]: themeValue === Theme.dark,
                    })}
                >
                    <Button
                        onClick={() => { }}
                        title={"Delete post"}
                        type={ButtonSize.delete}
                    />
                </div>
                <div
                    className={classNames(styles.rightButton, {
                        [styles.darkRightButton]: themeValue === Theme.dark,
                    })}
                >
                    <Button
                        onClick={() => { }}
                        title={"Cancel"}
                        type={ButtonSize.cancel}
                    />
                    <Button
                        onClick={() => { }}
                        title={"Add post"}
                        type={ButtonSize.small}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddPost;
