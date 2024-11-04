import React, { FC, useEffect, useState } from "react";
import styles from "./PostList.module.scss";
import { PostSize, PostsList, Theme } from "../config";
import Post from "../Post/Post";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import axios from "axios";

export type CardList = {
    cardList: PostsList;
};

const PostList: FC<CardList> = ({ cardList }) => {
    const { themeValue } = useThemeContext();
    const [posts, setPosts] = useState<PostsList>(cardList);
    const [error, setError] = useState<string | null>(null);
    // const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    "https://myth-p-default-rtdb.firebaseio.com/posts.json"
                );
                if (response.data) {
                    console.log(response.data);

                    const post = Object.values(response.data).map((item: any) => ({
                        id: item.id,
                        date: item.date,
                        image: item.image,
                        text: item.text,
                        title: item.title,
                        type: PostSize.card,
                        author: item.name,
                    }));

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

    console.log(posts);

    const handleDelete = (postId: string) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
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
                {posts.map((el, id) => {
                    return <Post key={el.id} {...el} onDelete={handleDelete} />;
                })}
            </div>
        </div>
    );
};

export default PostList;
