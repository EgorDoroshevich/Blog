import React from "react";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../../components/config";
import styles from "./Dislike.module.scss";

const DislikeIcon = ({ width = "24", height = "24", fill = "#ffffff" }) => {
    const { themeValue } = useThemeContext();
    return (
        <div>
            <svg
                width={width}
                height={height}
                viewBox="0 0 265 265"
                fill={fill}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M122.967 229.131C86.8782 229.044 8.00881 146.314 14.7103 91.3638C19.4285 52.6942 54.1606 28.7024 86.8515 41.967C104.431 49.1013 113.903 67.699 123.136 83.3194C133.949 66.4185 147.174 44.2087 166.943 37.5674C202.597 25.59 235.536 52.8352 239.136 94.4138C243.738 147.564 156.641 229.213 122.967 229.131Z"
                    fill={fill}
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M204.479 39.2418C207.795 36.1357 211.143 33.0358 214.709 30.2168"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M103.102 53.73C107.715 50.5198 112.016 46.9503 116.442 43.502"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M80.6953 39.8433C85.3065 36.6352 89.6075 33.0657 94.0337 29.6152"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M231.867 66.7808C236.478 63.5706 240.779 60.0032 245.206 56.5527"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M238.533 107.819C243.147 104.609 247.447 101.042 251.874 97.5918"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M220.002 151.18C225.164 148.956 230.09 146.318 235.115 143.82"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M183.621 193.589C188.788 190.745 218.558 175.687 223.556 172.572"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    stroke-Miterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M148.027 236.581C153.14 233.645 182.639 218.059 187.58 214.855"
                    stroke={"black"}
                    strokeWidth="14.6594"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default DislikeIcon;
