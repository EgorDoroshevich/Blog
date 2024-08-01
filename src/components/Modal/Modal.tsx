import React, { useCallback } from "react";
import styles from "./Modal.module.scss";
import Post from "../Post";
import { PostSize, Theme } from "../config";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";

const Modal = () => {
    const { themeValue } = useThemeContext();
    const navigate = useNavigate();
    const handeBack = useCallback(() => {
        navigate(RoutesList.Home);
    }, []);
    return (
        <div className={styles.modal}>
            {/* <Button onClick={() => { }} title={<CloseIcon />} type={ButtonSize.headerButton} /> */}
            <button
                onClick={handeBack}
                className={classNames(styles.modalClose, {
                    [styles.darkModalClose]: themeValue === Theme.dark,
                })}
            >
                <CloseIcon />
            </button>
            <Post

                title={
                    "sjhbjekhr bvjehk rjerkjebrherkfjhber fejrf ejkrh hkew rhvw rkhw rjkhwb erkvhwberkhv werhv wehmrv wkher dk f"
                }
                date={"02.04.2024"}
                content={"asdk wsdfegefev eh je fje fhe fhdfkekhrfb ekhrrfker "}
                image={require("../../images/polya.jpeg")}
                type={PostSize.Modal}
            />
        </div>
    );
};

export default Modal;
