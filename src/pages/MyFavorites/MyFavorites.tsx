import React, { useState } from "react";
import Post from "../../components/Post";
import { LikeStatus, PostSize } from "../../components/config";
import { useDispatch, useSelector } from "react-redux";
import {
    LikeSelectors,
    setFavoriteCard,
} from "../../redux/store/slices/likeSlice";

const MyFavorites = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(LikeSelectors.getFavorite);

    // const toggleLike = () => {
    //     dispatch(setFavoriteCard())
    // }

    return (
        <div>
            {favorite.map((item) => {
                if (item.like === true) {
                    return <Post {...item} />;
                }
            })}
        </div>
    );
};

export default MyFavorites;
