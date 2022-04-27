import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, setFilter } from "../redux/Notes/notes";
import styles from "./Header.module.css";

function Header() {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note && color) {
      dispatch(addNote({ note, color }));
    }
    setNote("");
  };

  return (
    <div className={styles.header}>
      <h1>Notes App</h1>
      <form>
        <input
          className={styles.search}
          placeholder="Search..."
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </form>
      <div className={styles.form}>
        <textarea
          placeholder="Enter your note here..."
          value={note}
          className={styles.textArea}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className={styles.textButtons}>
          <div className={styles.colors}>
            <form onChange={(e) => setColor(e.target.value)}>
              <input
                type="radio"
                name="color"
                value="red"
                className={styles.colorButton + " " + styles.buttonRed}
              />
              <input
                type="radio"
                value="purple"
                name="color"
                className={styles.colorButton + " " + styles.buttonPurple}
              ></input>
              <input
                type="radio"
                value="yellow"
                name="color"
                className={styles.colorButton + " " + styles.buttonYellow}
              ></input>
              <input
                type="radio"
                value="blue"
                name="color"
                className={styles.colorButton + " " + styles.buttonBlue}
              ></input>
              <input
                type="radio"
                value="green"
                name="color"
                className={styles.colorButton + " " + styles.buttonGreen}
              ></input>
            </form>
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
