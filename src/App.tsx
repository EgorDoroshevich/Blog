import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { PostSize, Theme } from "./components/config";
import PostList from "./components/PostList";
import { ThemeProvider } from "./context/Theme";
import Tab, { TabsTypes } from "./components/Tab/Tab";
import TabList from "./components/TabList";
import AddPost from "./components/AddPost";
import ThemeContext from "./context/Theme/Context";
import AsideMenu from "./components/AsideMenu";
import SignIn from "./pages/SignIn";
import Input from "./components/Input";
import FormPagesContainer from "./components/FormPagesContainer";
import classNames from "classnames";
import Home from "./components/Home";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";
import NewPassword from "./pages/NewPassword";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
import ResetPassword from "./pages/ResetPassword";
import Router from "./components/Router/Router";
import AppRouter from "./components/Router/Router";

const data = [
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Large,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Medium,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Medium,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Medium,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Medium,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Small,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Small,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Small,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Small,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Small,
  },
  {
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    date: "20.04.2021",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    image: require("./images/222.jpeg"),
    type: PostSize.Small,
  },
];
function App() {
  const [themeValue, setThemeValue] = useState<Theme>(Theme.light);

  const onChange = (value: Theme) => () => {
    setThemeValue(value);
  };
  return (
    <div>
      <ThemeProvider onChangeTheme={onChange} themeValue={themeValue}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
