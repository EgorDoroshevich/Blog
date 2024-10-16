import React, { ChangeEvent, useEffect, useState } from "react";
import { PostSize } from "../config";
import PostList from "../PostList";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { AppBar } from "@mui/material";
const dataHard = [
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Large,
        like: true,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
        like: true,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
        like: true,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
        like: false,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
        like: false,
    },
];

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await fetch(
                    "https://myth-p-default-rtdb.firebaseio.com/posts.json"
                ).then(function (response) {
                    response.json().then(function (data) {
                        console.log("data", data);
                    });
                });
                console.log(data);
            } catch (error) {
                setError(null);
            }
        };
    }, []);

    const navigate = useNavigate();
    return (
        <div>
            <Header />

            {!error ? <PostList cardList={dataHard} /> : null}
        </div>
    );
};

export default Home;
