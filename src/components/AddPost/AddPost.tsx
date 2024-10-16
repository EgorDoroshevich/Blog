import React, { useState } from "react";
import styles from "./AddPost.module.scss";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import Input from "../Input";
import Textarea from "../Textarea";
import Title from "../Title";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../config";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";
import Header from "../Header";

const AddPost = () => {
    const { themeValue } = useThemeContext();
    const navigate = useNavigate();
    const onNavigateToHome = () => {
        navigate(RoutesList.Home);
    };

    const [title, setTitle] = useState("");
    const [lessonNumber, setLessonNumber] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [text, setText] = useState("");

    // https://myth-p-default-rtdb.firebaseio.com/  firebase data
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const postData = { title, lessonNumber, image, description, text };
        try {
            const response = await fetch(
                "https://myth-p-default-rtdb.firebaseio.com/posts.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                }
            );
            if (response.ok) {
                navigate(RoutesList.Home);
            } else {
                console.error("Failed to submit post");
            }
        } catch {
            console.error("Error submitting post:", Error);
        }
    };

    return (
        <div className={styles.addpost}>
            <Header />
            <div
                className={classNames(styles.container, {
                    [styles.darkContainer]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.title, {
                        [styles.darkTitle]: themeValue === Theme.dark,
                    })}
                >
                    <Title title={"Add Post"} />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className={classNames(styles.form, {
                        [styles.darkForm]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.inputTitle, {
                            [styles.darkInputTitle]: themeValue === Theme.dark,
                        })}
                    >
                        <Input
                            value={title}
                            onChange={(value: string) => setTitle(value)}
                            title={"Title"}
                            placeholder={"title"}
                            type="text"
                        />
                    </div>
                    <div
                        className={classNames(styles.inputImage, {
                            [styles.darkInputImage]: themeValue === Theme.dark,
                        })}
                    >
                        <Input
                            value={lessonNumber}
                            placeholder={"lesson"}
                            title={"lesson number"}
                            onChange={(value: string) => setLessonNumber(value)}
                            type="text"
                        />
                        <Input
                            value={image}
                            placeholder={"image"}
                            title={"Image"}
                            onChange={(value: string) => setImage(value)}
                            type="text"
                        />
                    </div>
                    <div
                        className={classNames(styles.description, {
                            [styles.darkDescription]: themeValue === Theme.dark,
                        })}
                    >
                        <Textarea
                            title={"Description"}
                            onChange={(value: string) => setDescription(value)}
                            value={description}
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
                            onChange={(value: string) => setText(value)}
                            value={text}
                            placeholder=""
                        />
                    </div>
                </form>

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
                            onClick={handleSubmit}
                            title={"Add post"}
                            type={ButtonSize.small}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
