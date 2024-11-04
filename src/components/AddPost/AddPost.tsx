import React, { useState } from "react";
import styles from "./AddPost.module.scss";
import Button from "../Button";
import { ButtonSize } from "../Button/Button";
import Input from "../Input";
import Textarea from "../Textarea";
import Title from "../Title";
import { useThemeContext } from "../../context/Theme";
import classNames from "classnames";
import { Theme } from "../config";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router/Router";
import Header from "../Header";
import { database, storage } from "../../firebase";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { UserSelectors } from "../../redux/store/slices/userSlice";

const AddPost = () => {
  const { themeValue } = useThemeContext();
  const navigate = useNavigate();
  const onNavigateToHome = () => {
    navigate(RoutesList.Home);
  };
  const userName = useSelector(UserSelectors.getUser);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  console.log(title);

  const [image, setImage] = useState<File | undefined>(undefined);

  const handleImageChange = (value: string | File) => {
    if (value instanceof File) {
      setImage(value);
    }
  };

  const uploadImage = async (file: any) => {
    if (!file) return null;

    const storageRef = ref(storage, `files/${v4()}`);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL; // Возвращаем URL загруженного файла
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const imageUrl = await uploadImage(image);
    const DATE = new Date(Date.now()).toLocaleDateString();
    const postData = {
      id: v4(),
      title,
      image: imageUrl,
      text,
      date: DATE,
      name: userName?.name || "",
    };

    try {
      const response = await fetch(
        "https://myth-p-default-rtdb.firebaseio.com/posts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      if (response.ok) {
        navigate(RoutesList.Home);
      } else {
        console.error("Failed to submit post");
      }
    } catch {
      console.error("Error submitting post:", Error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.addpost}>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div
          className={classNames(styles.container, {
            [styles.darkContainer]: themeValue === Theme.dark,
          })}
        >
          <div
            className={classNames(styles.title, {
              [styles.darkTitle]: themeValue === Theme.dark,
            })}
          >
            <Title title={"Add Post"} />
          </div>
          <form
            onSubmit={handleSubmit}
            className={classNames(styles.form, {
              [styles.darkForm]: themeValue === Theme.dark,
            })}
          >
            <div
              className={classNames(styles.inputTitle, {
                [styles.darkInputTitle]: themeValue === Theme.dark,
              })}
            >
              <div
                className={classNames(styles.container_item, {
                  [styles.darkContainer_item]: themeValue === Theme.dark,
                })}
              >
                <label
                  className={classNames(styles.label, {
                    [styles.darkLabel]: themeValue === Theme.dark,
                  })}
                >
                  Title
                </label>
                <input
                  title={"Title"}
                  placeholder={"title"}
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  className={classNames(styles.input__item, {
                    [styles.darkInput__item]: themeValue === Theme.dark,
                  })}
                />
              </div>
            </div>
            <div
              className={classNames(styles.inputImage, {
                [styles.darkInputImage]: themeValue === Theme.dark,
              })}
            >
              <Input
                value={image}
                placeholder={"image"}
                title={"Image"}
                onChange={handleImageChange}
                type="file"
              />
            </div>
            <div
              className={classNames(styles.description, {
                [styles.darkDescription]: themeValue === Theme.dark,
              })}
            ></div>
            <div
              className={classNames(styles.text, {
                [styles.darkText]: themeValue === Theme.dark,
              })}
            >
              <Textarea
                title={"Text"}
                onChange={(value: string) => setText(value)}
                value={text}
                placeholder=""
              />
            </div>
          </form>

          <div
            className={classNames(styles.btnButtons, {
              [styles.darkBtnButtons]: themeValue === Theme.dark,
            })}
          >
            <Button
              onClick={() => { }}
              title={"Cancel"}
              type={ButtonSize.cancel}
            />
            <Button
              onClick={handleSubmit}
              title={"Add post"}
              type={
                themeValue === Theme.light
                  ? ButtonSize.small
                  : ButtonSize.darkSmall
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
