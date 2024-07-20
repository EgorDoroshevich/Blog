import React, { FC, useEffect, useState } from "react";
import styles from "./Post.module.scss";
import { PostProps, PostSize, Theme } from "../config";
import LikeIcon from "../../icons/LikeIcon/LikeIcon";
import DislikeIcon from "../../icons/DislikeIcon/DislikeIcon";
import SaveIcon from "../../icons/SaveIcon/SaveIcon";
import MoreIcon from "../../icons/MoreIcon/MoreIcon";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";

const Post: FC<PostProps> = ({ type, id, image, text, date, title }) => {
    const PostType = styles[type];

    const { themeValue } = useThemeContext();

    const [count, setCount] = useState<boolean>(false);
    const [like, setLike] = useState(0);

    const onPressLike = () => {
        setCount((prevState) => !prevState);
        if (count === false) {
            setLike(like + 1);
        } else {
            setLike(like - 1);
        }
    };

    return (
        <div className={classNames(PostType)}>
            <div
                className={classNames(styles.postContainer, {
                    [styles.darkPostContainer]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.postHead, {
                        [styles.darkPostHead]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.postText, {
                            [styles.darkPostText]: themeValue === Theme.dark,
                        })}
                    >
                        <div
                            className={classNames(styles.postDate, {
                                [styles.darkPostDate]: themeValue === Theme.dark,
                            })}
                        >
                            {date}
                        </div>
                        <div
                            className={classNames(styles.postTitle, {
                                [styles.darkPostTitle]: themeValue === Theme.dark,
                            })}
                        >
                            {title}
                        </div>
                        {type === PostSize.Large && (
                            <div className={styles.postText}>{text}</div>
                        )}
                    </div>
                    <div className={styles.postImage}>
                        <img src={image} alt="imagePost" />
                    </div>
                </div>
                <div
                    className={classNames(styles.postButton, {
                        [styles.darkPostButton]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.buttonLike, {
                            [styles.darkButtonLike]: themeValue === Theme.dark,
                        })}
                    >
                        <div
                            className={classNames(styles.like, {
                                [styles.darkLike]: themeValue === Theme.dark,
                            })}
                            onClick={onPressLike}
                        >
                            {count === false ? (
                                <div
                                    className={classNames(styles.disLikeIcon, {
                                        [styles.darkDislikeIcon]: themeValue === Theme.dark,
                                    })}
                                >
                                    <DislikeIcon />
                                </div>
                            ) : (
                                <div
                                    className={classNames(styles.likeIcon, {
                                        [styles.darkLikeIcon]: themeValue === Theme.dark,
                                    })}
                                >
                                    <LikeIcon />
                                </div>
                            )}
                            <div className={styles.numLike}>{like}</div>
                        </div>
                    </div>
                    <div
                        className={classNames(styles.buttonInfo, {
                            [styles.darkButtonInfo]: themeValue === Theme.dark,
                        })}
                    >
                        <div
                            className={classNames(styles.save, {
                                [styles.darkSave]: themeValue === Theme.dark,
                            })}
                            onClick={() => { }}
                        >
                            <SaveIcon />
                        </div>
                        <div
                            className={classNames(styles.more, {
                                [styles.darkMore]: themeValue === Theme.dark,
                            })}
                            onClick={() => { }}
                        >
                            <MoreIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
