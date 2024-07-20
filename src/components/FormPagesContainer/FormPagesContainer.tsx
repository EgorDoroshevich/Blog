import React, { FC, ReactElement } from "react";

import Title from "../Title";
import styles from "./FormPagesContainer.module.scss";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";

type FormPagesContainerProps = {
    title: string;
    children: ReactElement | ReactElement[];
    btnTitle: string;
    onSubmit: () => void;
    additionalInfo?: ReactElement;
};

const FormPagesContainer: FC<FormPagesContainerProps> = ({
    title,
    children,
    btnTitle,
    onSubmit,
    additionalInfo,
}) => {
    const { themeValue } = useThemeContext();
    return (
        <div className={classNames(styles.container, { [styles.darkContainer]: themeValue === Theme.dark })}>
            <div className={classNames(styles.breadcrumbs, { [styles.darkBreadcrumbs]: themeValue === Theme.dark })}>Back to home</div>
            <Title title={title} />
            <div className={classNames(styles.formContainer, { [styles.darkFormContainer]: themeValue === Theme.dark })}>
                <div className={classNames(styles.fieldsContainer, { [styles.darkFieldsContainer]: themeValue === Theme.dark })}>{children}</div>
                <div className={classNames(styles.button, { [styles.darkButton]: themeValue === Theme.dark })}>
                    <Button type={ButtonSize.large} title={btnTitle} onClick={onSubmit} />
                </div>
                <div>{additionalInfo}</div>
            </div>
        </div>
    );
};

export default FormPagesContainer;
