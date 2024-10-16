import React, { FC } from "react";
import styles from "./UserName.module.scss";

type UserProps = {
    email: any;
};

const UserName: FC<UserProps> = ({ email }) => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.name}>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserName;
