import React from "react";
import styles from "../NoteApp.module.css";

const NoteCard = ({
  note,
  index,
  noteList,
  setNoteList,
  setIsEdited,
  setEditIndex,
  setNoteData,
}) => {
  const { title, content, category } = note;

  const getCategoryClass = (category) => {
    const base = styles.category;
    const categoryLower = category.toLowerCase();
    if (categoryLower === "personal")
      return `${base} ${styles.categoryPersonal}`;
    if (categoryLower === "work") return `${base} ${styles.categoryWork}`;
    if (categoryLower === "learning")
      return `${base} ${styles.categoryLearning}`;
    return base;
  };

  const handleRemoveBtn = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirmDelete) return;

    const updatedList = [...noteList];
    updatedList.splice(index, 1);
    setNoteList(updatedList);
    localStorage.setItem("noteList", JSON.stringify(updatedList));
  };

  const handleEditBtn = () => {
    setNoteData(noteList[index]);
    setEditIndex(index);
    setIsEdited(true);
  };

  return (
    <div className={styles.card}>
      <div className={getCategoryClass(category)}>{category}</div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardContent}>
        {content.length > 0
          ? content.slice(0, 60) + (content.length > 60 ? "..." : "")
          : "No content"}
      </p>

      <div>
        <button className={styles.button} onClick={handleEditBtn}>
          Edit
        </button>
        <button className={styles.button} onClick={handleRemoveBtn}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
