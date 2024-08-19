import React, { useEffect, useState } from "react";

import "./App.css";
import { PostSize, Theme } from "./components/config";
import { ThemeProvider } from "./context/Theme";
import AppRouter from "./components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import { ThemeSelectors, setThemeValue } from "./redux/store/slices/themeSlice";
import app from "./firebase";

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
  const dispath = useDispatch();

  const themeValue = useSelector(ThemeSelectors.getIsTheme);

  const onChangeTheme = (value: Theme) => () => {
    dispath(setThemeValue(value));
  };

  // useEffect(() => {
  //   // Создайте или обновите мета-тег CSRF
  //   const meta = document.createElement('meta');
  //   meta.name = "csrf-token";
  //   meta.content = "{{ csrf_token }}"; // Или получите токен из источника данных
  //   document.head.appendChild(meta);

  //   // Очистите мета-тег при размонтировании компонента
  //   return () => {
  //     const existingMeta = document.querySelector('meta[name="csrf-token"]');
  //     if (existingMeta) {
  //       document.head.removeChild(existingMeta);
  //     }
  //   };
  // }, []);

  return (
    <div>
      <ThemeProvider onChangeTheme={onChangeTheme} themeValue={themeValue}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
