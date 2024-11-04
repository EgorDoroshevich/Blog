import React, { FC } from "react";
import styles from "./PostList.module.scss";
import { PostSize, PostsList, Theme } from "../config";
import Post from "../Post/Post";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import TabList from "../TabList";

export type CardList = {
    cardList: PostsList;
};

const PostList: FC<CardList> = ({ cardList }) => {
    const { themeValue } = useThemeContext();

    return (
        <div
            className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.dark,
            })}
        >
            <div className={classNames(styles.card, {
                [styles.darkCard]: themeValue === Theme.dark
            })}>
                {cardList.map((el, id) => {
                    return <Post key={el.id} {...el} />;
                })}
            </div>
        </div>
    );
};

export default PostList;
