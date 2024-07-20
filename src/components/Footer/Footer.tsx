import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <p>2024 Blogfolio</p>
                </div>
                <div>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
