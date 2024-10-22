import { ReactElement } from "react";

export enum Theme {
  light = "light",
  dark = "dark",
}

export enum LikeStatus {
  like = "like",
  dislike = "dislike",
}

export type Children = ReactElement | ReactElement[];

export enum PostSize {
  card = "card",
  modal = "modal",
}
export type PostProps = {
  type: PostSize;
  id?: number;
  image: string;
  text: string;
  date: string;
  title: string;
  author?: string;
  like: boolean;
};

export type PostsList = PostProps[];
