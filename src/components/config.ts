import { ReactElement } from "react";

export enum Theme {
  light = "light",
  dark = "dark",
}

export type Children = ReactElement | ReactElement[];

export enum PostSize {
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}
export type PostProps = {
  type: PostSize;
  id?: number;
  image: string;
  text: string;
  date: string;
  lessonNum?: number;
  title: string;
  author?: string;
};

export type PostsList = PostProps[];
