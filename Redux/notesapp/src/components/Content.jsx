import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./Content.module.css";

function Content() {
  const notes = useSelector((state) => state.notes.notes);
  const filter = useSelector((state) => state.notes.filter);
  const filteredNotes = useMemo(() => {
    if (filter) {
      return notes.filter((note) => note.note.toLowerCase().includes(filter));
    } else {
      return notes;
    }
  }, [notes, filter]);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        {filteredNotes.map((note) => (
          <div className={styles.note + " " + styles[note.color]} key={note.id}>
            <p>{note.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
