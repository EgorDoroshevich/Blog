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
import { deletePost, likeNum, updatePost } from "../../firebase";
import Loading from "../Loading";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { UserSelectors } from "../../redux/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";
import { LikeSelectors } from "../../redux/store/slices/likeSlice";
import { RootState } from "../../redux/store/store";

const Post: FC<PostProps> = ({
    type,
    postKey,
    like,
    likeStatus,
    image,
    text,
    date,
    title,
    author,
    onDelete,
    isLikedPost,
}) => {
    const PostType = styles[type];
    const [loading, setLoading] = useState<boolean>(false);
    const [count, setCount] = useState<number>(like || 0);
    const [likeNumber, setLikeNumber] = useState<boolean>(false);
    const { themeValue } = useThemeContext();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNavigateToEdit = () => {
        navigate(RoutesList.EditPost);
    };

    const user = useSelector(UserSelectors.getUser);
    const likeState = useSelector((state: RootState) =>
        LikeSelectors.getLikeState(state, postKey)
    );
    const handleDeleteClick = async () => {
        setLoading(true);
        const isDeleted = await deletePost(postKey);
        if (isDeleted) {
            console.log("Post deleted successfully");
            onDelete && onDelete(postKey);
        } else {
            console.error("Failed to delete post");
        }
        setLoading(false);
    };

    const handleLike = async () => {
        const newStatus = !likeNumber;
        const newCount = count + (newStatus ? 1 : -1);

        try {
            const isUpdated = await likeNum(postKey, newCount, newStatus);

            if (isUpdated) {
                setCount(newCount);
                setLikeNumber(newStatus);
            } else {
                console.error("Failed to update like");
            }
        } catch (error) {
            console.error("Error handling like:", error);
        } finally {
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
                                onClick={handleLike}
                            >
                                {!likeNumber ? (
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
                                <div>{count}</div>
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
                                <Button
                                    disabled={user.name !== author}
                                    type={ButtonSize.delete}
                                    title={<EditIcon />}
                                    onClick={onNavigateToEdit}
                                />
                            </div>
                            <div>
                                <Button
                                    disabled={user.name !== author}
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
