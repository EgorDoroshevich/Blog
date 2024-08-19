import React, { FC, useCallback, useEffect, useState } from "react";
import styles from "./Post.module.scss";
import { LikeStatus, PostProps, PostSize, Theme } from "../config";
import LikeIcon from "../../icons/LikeIcon/LikeIcon";
import DislikeIcon from "../../icons/DislikeIcon/DislikeIcon";
import SaveIcon from "../../icons/SaveIcon/SaveIcon";
import MoreIcon from "../../icons/MoreIcon/MoreIcon";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";
import { useDispatch, useSelector } from "react-redux";
import {
    LikeSelectors,
    setFavoriteCard,
    setLike,
} from "../../redux/store/slices/likeSlice";

const Post: FC<PostProps> = ({
    type,
    id,
    like,
    image,
    content,
    date,
    title,
}) => {
    const PostType = styles[type];

    const [likeStatus, setLikeState] = useState<boolean>(false);

    const { themeValue } = useThemeContext();

    const dispatch = useDispatch();

    const isLike = useSelector(LikeSelectors.getIsLike);
    const favorite = useSelector(LikeSelectors.getFavorite);

    const toggleLike =
        (like: boolean) => (event: React.MouseEvent<HTMLDivElement>) => {
            setLikeState((prev) => !prev);
            dispatch(setLike(likeStatus));
            console.log(likeStatus);
        };

    const navigate = useNavigate();

    const openModal = () => {
        navigate(RoutesList.Modal);
    };
    const handeBack = useCallback(() => {
        navigate(RoutesList.Home);
    }, []);

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
                            <div className={styles.postText}>{content}</div>
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
                            // onClick={toggleLike(isLike)}
                            onClick={toggleLike(like)}
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
                            {/* <div className={styles.numLike}>{like}</div> */}
                            {/* <div className={styles.numLike}>{store.getState().counter}</div> */}
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
                            // onClick={() => toggleToFavorites(card)}
                            onClick={() => { }}
                        >
                            <SaveIcon />
                        </div>
                        <div
                            className={classNames(styles.more, {
                                [styles.darkMore]: themeValue === Theme.dark,
                            })}
                            onClick={openModal}
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
