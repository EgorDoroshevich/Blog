import React, { FC } from "react";
import styles from "./UserName.module.scss";

type UserProps = {
    name: string;
};

const UserName: FC<UserProps> = ({ name }) => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.name}>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default UserName;
