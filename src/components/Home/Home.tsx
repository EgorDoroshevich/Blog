import React, { useEffect, useState } from "react";
import { PostProps, PostSize, Theme } from "../config";
import PostList from "../PostList";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import { useThemeContext } from "../../context/Theme";
import styles from "./Home.module.scss";
import classNames from "classnames";

const Home = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    console.log(posts);


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

    const { themeValue } = useThemeContext();
    const navigate = useNavigate();
    return (
        <div
            className={classNames(styles.home, {
                [styles.darkHome]: themeValue === Theme.dark,
            })}
        >
            <Header />
            {!error ? <PostList cardList={posts} /> : null}
        </div>
    );
};

export default Home;
