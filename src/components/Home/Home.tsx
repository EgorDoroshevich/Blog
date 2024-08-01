import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { json } from "stream/consumers";
import { ButtonSize } from "../Button/Button";
import Header from "../Header";
import { PostSize } from "../config";
import PostList from "../PostList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const data = [
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Large,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Medium,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
    },
    {
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        date: "20.04.2021",
        content:
            "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        image: require("../../images/polya.jpeg"),
        type: PostSize.Small,
    },
];

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await axios.get(
    //                 "https://jsonplaceholder.typicode.com/posts"
    //             );
    //             setPosts(response.data);
    //             console.log(response.data);
    //         } catch (error) {
    //             setError(null);
    //         }
    //     };

    //     fetchPosts();
    // }, []);

    const navigate = useNavigate();
    return (
        <div>
            <PostList cardList={data} />
        </div>
    );
};

export default Home;
