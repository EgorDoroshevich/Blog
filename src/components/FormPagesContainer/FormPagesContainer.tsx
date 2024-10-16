import React, { FC, ReactElement } from "react";

import Title from "../Title";
import styles from "./FormPagesContainer.module.scss";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme";
import { Theme } from "../config";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";

type FormPagesContainerProps = {
    title: string;
    children: ReactElement | ReactElement[];
    btnTitle: string;
    onSubmit: any;
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
    const navigate = useNavigate();
    const onNavigateToHome = () => {
        navigate(RoutesList.Home);
    };
    return (
        <div className={styles.mainContainer}>
            <form
            className={classNames(styles.container, {
                [styles.darkContainer]: themeValue === Theme.dark,
            })}
        >
            {/* <div
                onClick={onNavigateToHome}
                className={classNames(styles.breadcrumbs, {
                    [styles.darkBreadcrumbs]: themeValue === Theme.dark,
                })}
            >
                Back to home
            </div> 
            Пока это не нужно, в дальнейшем либо удалить, либо оптимизировать!
            */}
            <Title title={title} />
            <div
                className={classNames(styles.formContainer, {
                    [styles.darkFormContainer]: themeValue === Theme.dark,
                })}
            >
                <div
                    className={classNames(styles.fieldsContainer, {
                        [styles.darkFieldsContainer]: themeValue === Theme.dark,
                    })}
                >
                    {children}
                </div>
                <div
                    className={classNames(styles.button, {
                        [styles.darkButton]: themeValue === Theme.dark,
                    })}
                >
                    <Button type={ButtonSize.large} title={btnTitle} onClick={onSubmit} />
                </div>
                <div>{additionalInfo}</div>
            </div>
        </form>
        </div>
        
    );
};

export default FormPagesContainer;
