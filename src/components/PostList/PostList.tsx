import React, { FC } from "react";
import styles from "./PostList.module.scss";
import { PostsList, Theme } from "../config";
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
        <div>
            <TabList />
            <div
                className={classNames(styles.container, {
                    [styles.darkContainer]: themeValue === Theme.dark,
                })}
            >
                <div>
                    <div className={styles.large}>
                        <Post {...cardList[0]} />
                    </div>
                    <div className={styles.medium}>
                        {cardList.map((el, idx) => {
                            if (idx >= 1 && idx <= 4) {
                                return <Post id={el.id} {...el} />;
                            }
                        })}
                    </div>
                </div>

                <div className={styles.small}>
                    {cardList.map((el, idx) => {
                        if (idx >= 5 && idx <= 10) {
                            return <Post id={el.id} {...el} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default PostList;
