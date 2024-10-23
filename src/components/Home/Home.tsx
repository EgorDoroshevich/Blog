import React, { useEffect, useState } from "react";
import { PostSize, Theme } from "../config";
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
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: true,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: true,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.card,
        like: false,
    },
];

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios(
                "https://myth-p-default-rtdb.firebaseio.com/posts.json"
            );
            setPosts(response.data);
        };
        fetchPosts();
        console.log(posts);
    }, []);
    const { themeValue, onChangeTheme } = useThemeContext();
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {!error ? <PostList cardList={dataHard} /> : null}
            {/* <Loading /> */}
        </div>
    );
};

export default Home;
