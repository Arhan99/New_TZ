import styles from "./Form.module.css";
import React from "react";
import { postFormThunk } from "../../redux/reducers/form";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.form.response);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [thirdName, setThirdName] = React.useState("");
  const [image, setImage] = React.useState("");

  const onFirstNameChange = (e) => setFirstName(e.target.value);
  const onLastNameChange = (e) => setLastName(e.target.value);
  const onThirdNameChange = (e) => setThirdName(e.target.value);
  const onImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      action: "send_data",
      id: 1,
      image,
      contact: [firstName, lastName, thirdName],
    };

    console.log(data);
    dispatch(postFormThunk(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <p className={styles.label}>Имя</p>
          </div>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Введите имя"
              onChange={onFirstNameChange}
              id="name"
              name="name"
            />
          </div>
        </div>
        <div>
          <div>
            <p className={styles.label}>Фамилия</p>
          </div>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Введите фамилию"
              onChange={onLastNameChange}
              id="lastname"
              name="lastname"
            />
          </div>
        </div>
        <div>
          <div>
            <p className={styles.label}>Отчество</p>
          </div>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Введите отчество"
              onChange={onThirdNameChange}
              id="patronymic"
              name="patronymic"
            />
          </div>
        </div>
        <div>
          <div>
            <p className={styles.label}>Фото</p>
          </div>
          <div className={styles.img_button_div}>
            <input
              className={styles.upload_img}
              onChange={onImageChange}
              type="file"
              id="image"
              accept=".jpg, .jpeg, .png"
              multiple
            ></input>

            <label className={styles.upload_file__label} htmlFor="image">
              {image ? (
                <img width={80} height={80} src={URL.createObjectURL(image)} />
              ) : (
                <img
                  className={styles.upload_file__icon}
                  src="https://w7.pngwing.com/pngs/517/130/png-transparent-logo-computer-icons-youtube-marketing-youtube-logo-social-media-marketing-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8.png"
                />
              )}
            </label>
          </div>
        </div>
        <div className={styles.button_div}>
          <button type="submit" className={styles.button}>
            Сохранить
          </button>
        </div>
      </form>
      <div>
        <div>
          <p className={styles.label}>Response</p>
        </div>
        <div>
          <textarea
            value={JSON.stringify(response, null, 2)}
            disabled
            className={styles.textarea}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Form;
