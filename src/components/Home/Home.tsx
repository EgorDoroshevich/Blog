import React, { useEffect, useState } from "react";
import { PostProps, PostSize, Theme } from "../config";
import PostList from "../PostList";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import axios from "axios";
import { useThemeContext } from "../../context/Theme";
import Loading from "../Loading";

const dataHard = [
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: true,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: true,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: true,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
        author: "Egor",
    },
];

const Home = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    "https://myth-p-default-rtdb.firebaseio.com/posts.json"
                );
                if (response.data) {
                    const postsArray: PostProps[] = response.data.map(
                        (post: PostProps) => ({
                            type: PostSize.card, // или PostSize.modal в зависимости от ситуации
                            id: post.id,
                            image: post.image,
                            text: post.text,
                            date: post.date,
                            title: post.title,
                            author: post.author,
                            like: post.like,
                        })
                    );
                    setPosts(postsArray);
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

    const { themeValue, onChangeTheme } = useThemeContext();
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {!error ? <PostList cardList={posts} /> : null}
        </div>
    );
};

export default Home;
