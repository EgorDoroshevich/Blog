import React, { useState, useEffect } from "react";
import styles from "./EditPost.module.scss";
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
import { useSelector } from "react-redux";
import { UserSelectors } from "../../redux/store/slices/userSlice";
import { useParams } from "react-router-dom";
import { dbRealtime, updatePost } from "../../firebase"; // Импорт функции updatePost
import Loading from "../Loading";
import { get, ref } from "firebase/database";
import { v4 } from "uuid";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase';

const EditPost = () => {
    const { postKey } = useParams<{ postKey: string }>();
    const { themeValue } = useThemeContext();
    const navigate = useNavigate();
    const onNavigateToHome = () => {
        navigate(RoutesList.Home);
    };

    const userName = useSelector(UserSelectors.getUser);
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [image, setImage] = useState<File | undefined>(undefined);

    // Загрузка данных поста при монтировании компонента
    useEffect(() => {
        // Получаем текущие данные поста для редактирования
        const fetchPostData = async () => {
            if (!postKey) return;
            const postRef = ref(dbRealtime, `posts/${postKey}`);
            const snapshot = await get(postRef);
            if (snapshot.exists()) {
                const postData = snapshot.val();
                setTitle(postData.title);
                setText(postData.text);
            }
        };

        fetchPostData();
    }, [postKey]);


    const handleEditImageChange = (value: string | File) => {
        if (value instanceof File) {
            setImage(value);
        }
    };

    return (
        <div className={styles.addpost}>
            <Header />
            {loading ? (
                <Loading />
            ) : (
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
                        <Title title={"Edit Post"} />
                    </div>
                    <form
                        className={classNames(styles.form, {
                            [styles.darkForm]: themeValue === Theme.dark,
                        })}
                    >
                        <div
                            className={classNames(styles.inputTitle, {
                                [styles.darkInputTitle]: themeValue === Theme.dark,
                            })}
                        >
                            <div
                                className={classNames(styles.container_item, {
                                    [styles.darkContainer_item]: themeValue === Theme.dark,
                                })}
                            >
                                <label
                                    className={classNames(styles.label, {
                                        [styles.darkLabel]: themeValue === Theme.dark,
                                    })}
                                >
                                    Title
                                </label>
                                <input
                                    title={"Title"}
                                    placeholder={"title"}
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    type="text"
                                    className={classNames(styles.input__item, {
                                        [styles.darkInput__item]: themeValue === Theme.dark,
                                    })}
                                />
                            </div>
                        </div>
                        <div
                            className={classNames(styles.inputImage, {
                                [styles.darkInputImage]: themeValue === Theme.dark,
                            })}
                        >
                            <Input
                                value={image}
                                placeholder={"image"}
                                title={"Image"}
                                onChange={handleEditImageChange}
                                type="file"
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
                        <Button
                            onClick={onNavigateToHome}
                            title={"Cancel"}
                            type={ButtonSize.cancel}
                        />
                        <Button
                            onClick={() => { }}
                            title={"Edit post"}
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.small
                                    : ButtonSize.darkSmall
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditPost;
