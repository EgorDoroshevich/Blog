import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import { useThemeContext } from "../../context/Theme";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../components/Router/Router";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/store/slices/signInSlice";
import Button from "../../components/Button";
import { ButtonSize } from "../../components/Button/Button";
import { Checkbox } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import classNames from "classnames";
import { Theme } from "../../components/config";
import SunnyIcon from "../../icons/SunnyIcon/SunnyIcon";
import Loading from "../../components/Loading";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
type SignInProps = {
    setLogin: () => void;
};

const SignIn = ({ setLogin }: SignInProps) => {
    const dispatch = useDispatch();
    const { themeValue, onChangeTheme } = useThemeContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            alert("Please enter both email and password");
            setLoading(false);
            return;
        }

        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
                if (!Error) {
                    dispatch(
                        setUser({
                            email: user.email,
                            id: user.uid,
                            token: user.refreshToken,
                        })
                    );
                }
                console.log(user);
                setLoading(false);
                setLogin()
                navigate(RoutesList.Home);
            });
        } catch (error: any) {
            setLoading(false);
            if (error.code === "auth/user-not-found") {
                alert("User not found. Please sign up.");
            } else if (error.code === "auth/wrong-password") {
                alert("Incorrect password. Please try again.");
            } else {
                alert("Error during sign-in: " + error.message);
            }
        }
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div
                    className={classNames(styles.container, {
                        [styles.darkContainer]: themeValue === Theme.dark,
                    })}
                >
                    <div
                        className={classNames(styles.containerRight, {
                            [styles.darkContainerRight]: themeValue === Theme.dark,
                        })}
                    >
                        {/* Theme toggle button */}
                        <div className={styles.theme}>
                            <Button
                                type={ButtonSize.themeButton}
                                onClick={() =>
                                    onChangeTheme(
                                        themeValue === Theme.light ? Theme.dark : Theme.light
                                    )
                                }
                                title={
                                    themeValue === Theme.light ? <DarkModeIcon /> : <SunnyIcon />
                                }
                            />
                        </div>

                        {/* Header */}
                        <h1
                            className={classNames(styles.header, {
                                [styles.darkHeader]: themeValue === Theme.dark,
                            })}
                        >
                            Sign in
                        </h1>

                        {/* Sign up prompt */}
                        <p className={styles.signUp}>
                            New to company?{" "}
                            <span
                                className={classNames(styles.span, {
                                    [styles.darkSpan]: themeValue === Theme.dark,
                                })}
                                onClick={() => navigate(RoutesList.SignUp)}
                            >
                                Sign up!
                            </span>
                        </p>

                        {/* Google Sign-In Button */}
                        <Button
                            onClick={() => { }}
                            title="Continue with Google"
                            type={
                                themeValue === Theme.light
                                    ? ButtonSize.google
                                    : ButtonSize.googleDark
                            }
                            className={styles.google}
                        />

                        {/* Email and password inputs */}
                        <div className={styles.containerRegister}>
                            <div className={styles.container_item}>
                                <label className={styles.label_email}>Email</label>
                                <input
                                    title="Email"
                                    placeholder="Your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    className={styles.email__item}
                                />
                            </div>

                            <div className={styles.container_item}>
                                <label className={styles.label__password}>Password</label>
                                <input
                                    title="Password"
                                    placeholder="Your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    className={styles.password__item}
                                />
                            </div>
                        </div>

                        {/* Remember me and forgot password */}
                        <div className={styles.remember}>
                            <div className={styles.checkbox}>
                                <Checkbox defaultChecked />
                                <p>Remember me</p>
                            </div>
                            <div className={styles.forgotPassword} onClick={() => { }}>
                                Forgot your password?
                            </div>
                        </div>

                        {/* Sign in button */}
                        <Button
                            onClick={handleSignIn}
                            title="Sign In"
                            type={ButtonSize.large}
                            className={styles.signIn}
                        />
                    </div>

                    {/* Image section */}
                    <div className={styles.containerImage}>
                        <img
                            src={
                                themeValue === Theme.light
                                    ? require("../../images/whiteTheme.jpeg")
                                    : require("../../images/dark.jpeg")
                            }
                            alt={themeValue === Theme.light ? "mount" : "black"}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;

// import React, { SetStateAction, useState } from "react";
// import styles from "./SignIn.module.scss";
// import { useThemeContext } from "../../context/Theme";
// import { useNavigate } from "react-router-dom";
// import AppRouter, { RoutesList } from "../../components/Router/Router";
// import { useDispatch } from "react-redux";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { setUser } from "../../redux/store/slices/signInSlice";
// import Button from "../../components/Button";
// import { ButtonSize } from "../../components/Button/Button";
// import { Checkbox } from "@mui/material";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import classNames from "classnames";
// import { Theme } from "../../components/config";
// import SunnyIcon from "../../icons/SunnyIcon/SunnyIcon";
// import Loading from "../../components/Loading";

// type SignInProps = {
//     setLogin: () => void;
// };

// const SignIn = ({ setLogin }: SignInProps) => {
//     const dispatch = useDispatch();

//     const { themeValue, onChangeTheme } = useThemeContext();

//     const navigate = useNavigate();

//     const onNavigateToSignUp = () => {
//         navigate(RoutesList.SignUp);
//     };

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState<boolean>(false);

//     const onChangeSignIn = (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoading(true);
//         setLogin();
//         const auth = getAuth();
//         signInWithEmailAndPassword(auth, email, password)
//             .then(({ user }) => {
//                 if (!Error) {
//                     dispatch(
//                         setUser({
//                             email: user.email,
//                             id: user.uid,
//                             token: user.refreshToken,
//                         })
//                     );
//                 }
//                 console.log(user);
//                 navigate(RoutesList.Home);
//             })
//             .catch(() => {

//                 alert("Invalid user");
//                 setLoading(false);
//             });
//     };

//     return (
//         <div>
//             {loading === true ? (
//                 <Loading />
//             ) : (
//                 <div
//                     className={classNames(styles.container, {
//                         [styles.darkContainer]: themeValue === Theme.dark,
//                     })}
//                 >
//                     <div
//                         className={classNames(styles.containerRight, {
//                             [styles.darkContainerRight]: themeValue === Theme.dark,
//                         })}
//                     >
//                         <div
//                             className={classNames(styles.theme, {
//                                 [styles.darkTheme]: themeValue === Theme.dark,
//                             })}
//                         >
//                             <Button
//                                 type={ButtonSize.themeButton}
//                                 onClick={
//                                     themeValue === Theme.light
//                                         ? onChangeTheme(Theme.dark)
//                                         : onChangeTheme(Theme.light)
//                                 }
//                                 title={
//                                     themeValue === Theme.light ? <DarkModeIcon /> : <SunnyIcon />
//                                 }
//                             />
//                         </div>
//                         <h1
//                             className={classNames(styles.header, {
//                                 [styles.darkHeader]: themeValue === Theme.dark,
//                             })}
//                         >
//                             Sign in
//                         </h1>
//                         <p
//                             className={classNames(styles.signUp, {
//                                 [styles.darkSignUp]: themeValue === Theme.dark,
//                             })}
//                         >
//                             New to company?
//                             <span
//                                 className={classNames(styles.span, {
//                                     [styles.darkSpan]: themeValue === Theme.dark,
//                                 })}
//                                 onClick={onNavigateToSignUp}
//                             >
//                                 Sign up!
//                             </span>
//                         </p>
//                         <Button
//                             onClick={() => { }}
//                             title={"Continue with Google"}
//                             type={
//                                 themeValue === Theme.light
//                                     ? ButtonSize.google
//                                     : ButtonSize.googleDark
//                             }
//                             className={classNames(styles.google, {
//                                 [styles.darkGoogle]: themeValue === Theme.dark,
//                             })}
//                         />
//                         <div
//                             className={classNames(styles.containerRegister, {
//                                 [styles.darkContainerRegister]: themeValue === Theme.dark,
//                             })}
//                         >
//                             <div
//                                 className={classNames(styles.container_item, {
//                                     [styles.darkContainer_item]: themeValue === Theme.dark,
//                                 })}
//                             >
//                                 <label
//                                     className={classNames(styles.label_email, {
//                                         [styles.darkLabel_email]: themeValue === Theme.dark,
//                                     })}
//                                 >
//                                     Email
//                                 </label>
//                                 <input
//                                     title={"Email"}
//                                     placeholder={"Your email"}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     value={email}
//                                     type="email"
//                                     className={classNames(styles.email__item, {
//                                         [styles.darkEmail__item]: themeValue === Theme.dark,
//                                     })}
//                                 />
//                             </div>
//                             <div
//                                 className={classNames(styles.container_item, {
//                                     [styles.darkContainer_item]: themeValue === Theme.dark,
//                                 })}
//                             >
//                                 <label
//                                     className={classNames(styles.label__password, {
//                                         [styles.darkLabel__password]: themeValue === Theme.dark,
//                                     })}
//                                 >
//                                     Password
//                                 </label>
//                                 <input
//                                     title={"Password"}
//                                     placeholder={"Your password"}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     value={password}
//                                     type="password"
//                                     className={classNames(styles.password__item, {
//                                         [styles.darkPassword__item]: themeValue === Theme.dark,
//                                     })}
//                                 />
//                             </div>
//                         </div>
//                         <div
//                             className={classNames(styles.remember, {
//                                 [styles.darkRemember]: themeValue === Theme.dark,
//                             })}
//                         >
//                             <div
//                                 className={classNames(styles.checkbox, {
//                                     [styles.darkCheckbox]: themeValue === Theme.dark,
//                                 })}
//                             >
//                                 <Checkbox
//                                     className={classNames(styles.checkbox, {
//                                         [styles.darkCheckbox]: themeValue === Theme.dark,
//                                     })}
//                                     defaultChecked
//                                 />
//                                 <p>Remember me</p>
//                             </div>
//                             <div
//                                 onClick={() => { }}
//                                 className={classNames(styles.forgotPassorword, {
//                                     [styles.darkForgotPassorword]: themeValue === Theme.dark,
//                                 })}
//                             >
//                                 Forgot your password?
//                             </div>
//                         </div>
//                         <div>
//                             <Button
//                                 onClick={onChangeSignIn}
//                                 title={"Sign In"}
//                                 type={
//                                     themeValue === Theme.light
//                                         ? ButtonSize.large
//                                         : ButtonSize.largeDark
//                                 }
//                                 className={classNames(styles.signIn, {
//                                     [styles.darkSignIn]: themeValue === Theme.dark,
//                                 })}
//                             />
//                         </div>
//                     </div>

//                     <div
//                         className={classNames(styles.containerImage, {
//                             [styles.darkContainerImage]: themeValue === Theme.dark,
//                         })}
//                     >
//                         {themeValue === Theme.light ? (
//                             <img src={require("../../images/whiteTheme.jpeg")} alt="mount" />
//                         ) : (
//                             <img src={require("../../images/dark.jpeg")} alt="black" />
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SignIn;
