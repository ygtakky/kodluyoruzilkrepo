import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Notes App</h1>
      <form>
        <input className={styles.search} placeholder="Search..." />
      </form>
      <form className={styles.form}>
        <textarea className={styles.textArea} />
        <div className={styles.textButtons}>
          <div className={styles.colors}>
            <button
              className={styles.colorButton + " " + styles.buttonRed}
            ></button>
            <button
              className={styles.colorButton + " " + styles.buttonPurple}
            ></button>
            <button
              className={styles.colorButton + " " + styles.buttonYellow}
            ></button>
            <button
              className={styles.colorButton + " " + styles.buttonBlue}
            ></button>
            <button
              className={styles.colorButton + " " + styles.buttonGreen}
            ></button>
          </div>
          <button className={styles.button}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Header;
