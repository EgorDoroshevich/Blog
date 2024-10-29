import classNames from "classnames";
import styles from "./Loading.module.scss";
import React from "react";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";

const Loading = ({
  width = "200",
  height = "200",
  fill = "#fff",
  stroke = "#0099ff",
}) => {
  const { themeValue } = useThemeContext();
  return (
    <div
      className={classNames(styles.Loading, {
        [styles.darkLoading]: themeValue === Theme.dark,
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width={width}
        height={height}
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "rgb(255, 255, 255)",
        }}
      >
        <g>
          <circle
            strokeDasharray="164.93361431346415 56.97787143782138"
            r="35"
            strokeWidth="5"
            stroke={stroke}
            fill={fill}
            cy="50"
            cx="50"
          >
            <animateTransform
              keyTimes="0;1"
              values="0 50 50;360 50 50"
              dur="1s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            ></animateTransform>
          </circle>
          <g></g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
