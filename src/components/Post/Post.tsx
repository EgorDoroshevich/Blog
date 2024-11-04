import React, { FC, useCallback, useState } from "react";
import styles from "./Post.module.scss";
import { PostProps, Theme } from "../config";
import LikeIcon from "../../icons/LikeIcon/LikeIcon";
import DislikeIcon from "../../icons/DislikeIcon/DislikeIcon";
import SaveIcon from "../../icons/SaveIcon/SaveIcon";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";
import DeleteIcon from "../../icons/Delete/DeleteIcon";
import EditIcon from "../../icons/EditIcon/EditIcon";
import { dbRealtime, deletePost } from "../../firebase";
import { remove } from "firebase/database";
import { ref } from "firebase/storage";

const Post: FC<PostProps> = ({
    type,
    id,
    like,
    image,
    text,
    date,
    title,
    author,
}) => {
    const PostType = styles[type];
    const [likeStatus, setLikeState] = useState<boolean>(false);
    const { themeValue } = useThemeContext();
    const navigate = useNavigate();

    const handleDelete = async (id: any) => {
        try {
            await deletePost(id);
            console.log("Post deleted successfully");
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    const handeBack = useCallback(() => {
        navigate(RoutesList.Home);
    }, []);

    return (
        <div
            className={classNames(PostType, {
                [styles.darkCard]: themeValue === Theme.dark,
            })}
        >
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
                            className={classNames(styles.postHead__item, {
                                [styles.darkPostHead__item]: themeValue === Theme.dark,
                            })}
                        >
                            <div
                                className={classNames(styles.author, {
                                    [styles.darkAuthor]: themeValue === Theme.dark,
                                })}
                            >
                                <p className={styles.text}>Author:</p>
                                {author}
                            </div>
                            <div
                                className={classNames(styles.date, {
                                    [styles.darkDate]: themeValue === Theme.dark,
                                })}
                            >
                                {date}
                            </div>
                        </div>
                        <div
                            className={classNames(styles.postTitle, {
                                [styles.darkPostTitle]: themeValue === Theme.dark,
                            })}
                        >
                            {title}
                        </div>

                        <div
                            className={classNames(styles.postText, {
                                [styles.darkPostText]: themeValue === Theme.dark,
                            })}
                        >
                            {text}
                        </div>
                    </div>
                    <div className={classNames(styles.postImage)}>
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
                            // onClick={toggleLike(isLike)}
                            onClick={() => { }}
                        >
                            {likeStatus === false ? (
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
                            className={classNames(styles.edit, {
                                [styles.darkEdit]: themeValue === Theme.dark,
                            })}
                        >
                            <EditIcon />
                        </div>
                        <div
                            className={classNames(styles.delete, {
                                [styles.darkDelete]: themeValue === Theme.dark,
                            })}
                            onClick={() => handleDelete(id)}
                        >
                            <DeleteIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
