import React, { FC } from "react";
import { PostsList } from "../config";
import Post from "../Post";

type SaveProps = {
    saveCard: PostsList;
};

const SavePost: FC<SaveProps> = ({ saveCard }) => {
    return (
        <div>
            {saveCard.map((item, idx) => {
                return <Post key={item.id || idx} {...item} />;
            })}
        </div>
    );
};

export default SavePost;
