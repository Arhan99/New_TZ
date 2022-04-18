import styles from "./Palette.module.css";
import {
  addColor,
  removeColor,
  changeColor,
  selectAllColors,
} from "../../redux/reducers/color";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

function Palette() {
  const dispatch = useDispatch();
  const colors = useSelector(selectAllColors);

  console.log(colors);
  const onColorAdd = () => {
    dispatch(addColor("#ff0000"));
  };

  return (
    <div>
      <div className={styles.colors}>
        {colors.map((color) => (
          <Color
            key={color.id}
            id={color.id}
            color={color.color}
            onRemove={() => dispatch(removeColor(color.id))}
            onChange={(newColor) => dispatch(changeColor(color.id, newColor))}
          />
        ))}
      </div>

      <div style={{ marginTop: 200 }}>
        <button className={styles.button} onClick={onColorAdd}>
          Добавить цвет
        </button>
      </div>
    </div>
  );
}

function Color({ id, color, onChange, onRemove }) {
  const [isHovered, setIsHovered] = React.useState(false);

  // useEffect(() => {
  //     // console.log('COLOR with id ' + id + ' appeared')
  //     console.log('OPEN COLOR PICKER FOR COLOR WITH ID ' + id)
  // }, [])

  console.log({ color });
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered && (
        <button style={{ position: "absolute" }} onClick={onRemove}>
          &times;
        </button>
      )}
      <input
        className={styles.input}
        value={color}
        onChange={(e) => onChange(e.target.value)}
        type="color"
        id={"color-" + id}
      />
      <label
        className={styles.color}
        style={{ backgroundColor: color, display: "block" }}
        htmlFor={"color-" + id}
      />
    </div>
  );
}

export default Palette;
