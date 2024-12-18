import React, { FC, useEffect, useState } from "react";
import styles from "./PostList.module.scss";
import { PostSize, PostsList, Theme } from "../config";
import Post from "../Post/Post";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export type CardList = {
    cardList: PostsList;
};

const PostList: FC<CardList> = ({ cardList }) => {
    const { themeValue } = useThemeContext();
    const [posts, setPosts] = useState<PostsList>(cardList);
    const [liked, setLiked] = useState<PostsList>(cardList);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    "https://myth-p-default-rtdb.firebaseio.com/posts.json"
                );
                if (response.data) {
                    console.log(response.data);

                    const post = Object.entries(response.data).map(
                        ([key, item]: [string, any]) => ({
                            postKey: key,
                            id: item.id,
                            date: item.date,
                            image: item.image,
                            text: item.text,
                            title: item.title,
                            type: PostSize.card,
                            author: item.name,
                            like: item.like,
                            likeStatus: item.likeStatus,
                            isLikedPost: item.isLikedPost,
                        })
                    );
                    console.log(post);
                    setPosts(post);
                } else {
                    setPosts([]);
                }
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
                setError("Не удалось загрузить посты.");
            }
        };
        fetchPosts();
    }, []);

    const handleDelete = async (postKey: string) => {
        try {
            const userData = localStorage.getItem("user");

            if (!userData) {
                console.error("User is not authenticated");
                return;
            } else {
                const response = await fetch(
                    `https://myth-p-default-rtdb.firebaseio.com/posts/${postKey}.json`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log("Response from delete request:", response);

                if (response.ok) {
                    setPosts((prevPosts) =>
                        prevPosts.filter((post) => post.postKey !== postKey)
                    );
                    console.log("Post deleted successfully");
                } else {
                    console.error("Failed to delete post. Status:", response.status);
                }
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const hadnleLikePost = async (
        postKey: string,
        like: number,
        likeStatus: boolean
    ) => {
        try {
            const newLikeStatus = !likeStatus;
            const newLikeCount = newLikeStatus ? like + 1 : like - 1;

            const response = await fetch(
                `https://myth-p-default-rtdb.firebaseio.com/posts/${postKey}.json`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        like: newLikeCount,
                        likeStatus: newLikeStatus,
                    }),
                }
            );

            if (response.ok) {
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post.postKey === postKey
                            ? { ...post, like: newLikeCount, likeStatus: newLikeStatus }
                            : post
                    )
                );
                console.log("Post liked successfully");
            } else {
                console.error(`Failed to update like. Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error updating like:", error);
        }
    };

    return (
        <div
            className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.dark,
            })}
        >
            <div
                className={classNames(styles.card, {
                    [styles.darkCard]: themeValue === Theme.dark,
                })}
            >
                {[...posts].reverse().map((el) => {
                    return (
                        <Post
                            key={el.id}
                            {...el}
                            postKey={el.postKey}
                            onDelete={handleDelete}
                            isLikedPost={(postKey, like, likeStatus) =>
                                hadnleLikePost(postKey, like, likeStatus)
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PostList;
