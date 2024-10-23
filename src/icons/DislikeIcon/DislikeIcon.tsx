import React from "react";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../../components/config";
import styles from "./Dislike.module.scss";

const DislikeIcon = ({ width = "24", height = "24", fill = "#000", stroke = "#000" }) => {
    const { themeValue } = useThemeContext();
    return (
        <div>
            <svg
                width={width}
                height={height}
                viewBox="0 0 38 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M27.6364 0C24.0091 0 20.8136 1.925 19 4.95C17.1864 1.925 13.9909 0 10.3636 0C4.66364 0 0 4.95 0 11C0 21.9083 19 33 19 33C19 33 38 22 38 11C38 4.95 33.3364 0 27.6364 0Z"
                    stroke={stroke}
                    strokeWidth="1"
                    fill={fill}
                />
            </svg>
        </div>
    );
};

export default DislikeIcon;
