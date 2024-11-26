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
  id: string | any;
  postKey: string | any;
  image: string;
  text: string;
  date: string;
  title: string;
  author?: string;
  like?: boolean;
  onDelete?: (id: string) => void;
};

export type PostsList = PostProps[];
