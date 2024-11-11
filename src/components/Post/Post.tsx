import React, { FC, useState } from "react";
import styles from "./Post.module.scss";
import { PostProps, Theme } from "../config";
import LikeIcon from "../../icons/LikeIcon/LikeIcon";
import DislikeIcon from "../../icons/DislikeIcon/DislikeIcon";
import SaveIcon from "../../icons/SaveIcon/SaveIcon";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import DeleteIcon from "../../icons/Delete/DeleteIcon";
import EditIcon from "../../icons/EditIcon/EditIcon";
import { dbRealtime, deletePost } from "../../firebase";
import Loading from "../Loading";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { UserSelectors } from "../../redux/store/slices/userSlice";

const Post: FC<PostProps> = ({
    type,
    id,
    like,
    image,
    text,
    date,
    title,
    author,
    onDelete,
}) => {
    const PostType = styles[type];
    const [likeStatus, setLikeState] = useState<boolean>(false);
    const [loading, setLoadnig] = useState<boolean>(false);
    const { themeValue } = useThemeContext();
    const dispatch = useDispatch();

    const user = useSelector(UserSelectors.getUser);

    const handleDeleteClick = async () => {
        setLoadnig(true);
        try {
            await deletePost(id);
            console.log("Post deleted successfully");
            onDelete && onDelete(id);
            setLoadnig(false);
        } catch (error) {
            setLoadnig(false);
            console.error("Error deleting post:", error);
        }
    };


    return (
        <div
            className={classNames(PostType, {
                [styles.darkCard]: themeValue === Theme.dark,
            })}
        >
            {loading === true ? (
                <Loading />
            ) : (
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
                            <div>
                                <Button
                                    // disabled
                                    type={ButtonSize.delete}
                                    title={<DeleteIcon />}
                                    onClick={handleDeleteClick}
                                    className={classNames(styles.delete, {
                                        [styles.darkDelete]: themeValue === Theme.dark,
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
