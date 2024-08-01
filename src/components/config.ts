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
  Modal = "Modal",
}
export type PostProps = {
  type: PostSize;
  id?: number;
  image: string;
  content: string;
  date: string;
  lessonNum?: number;
  title: string;
  author?: string;
};

export type PostsList = PostProps[];
