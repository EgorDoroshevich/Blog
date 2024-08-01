import React, { FC, ReactElement } from "react";
import { PostSize, PostsList } from "../config";
import Post from "../Post";

type SaveProps = {
    saveCard: PostsList;
};

const SavePost: FC<SaveProps> = ({ saveCard }) => {

    return (
        <div>
            {saveCard.map((item, idx) => {
                return <Post id={item.id} {...item} />;
            })}
        </div>
    );
};

export default SavePost;
