import React from "react";
import NoteCard from "./NoteCard";
import styles from "../NoteApp.module.css";

const NoteList = ({
  noteList,
  setNoteList,
  setIsEdited,
  setNoteData,
  setEditIndex,
}) => {
  return (
    <div className={styles.noteCard}>
      {noteList.map((item, index) => (
        <NoteCard
          key={index}
          note={item}
          index={index}
          noteList={noteList}
          setNoteList={setNoteList}
          setIsEdited={setIsEdited}
          setEditIndex={setEditIndex}
          setNoteData={setNoteData}
        />
      ))}
    </div>
  );
};

export default NoteList;
