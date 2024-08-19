import React, { FC, useState } from "react";
import styles from "./FormTest.module.scss";

type Props = {
  title: any;
  handleSubmit: any;
};

const FormTest = ({ title, handleSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
      <input
        type="email"
        value={email}
        placeholder="enter email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        className={styles.email}
      />
      <input
        type="password"
        value={password}
        placeholder="enter password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        className={styles.password}
      />
      <button
        className={styles.button}
        onClick={() => handleSubmit(email, password)}
      >
        ЖМИ
      </button>
    </div>
  );
};

export default FormTest;
