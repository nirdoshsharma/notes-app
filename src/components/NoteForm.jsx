import React, { useState } from "react";
import styles from "../NoteApp.module.css";

const NoteForm = ({
  noteData,
  setNoteData,
  noteList,
  setNoteList,
  editIndex,
  isEdited,
  setEditIndex,
  setIsEdited,
}) => {
  const [inputErrors, setInputErrors] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const errors = {};
    let hasError = false;

    if (!noteData.title.trim()) {
      errors.title = "Title field is Mandatory";
      hasError = true;
    }

    if (!noteData.content.trim()) {
      errors.content = "Content field is Mandatory";
      hasError = true;
    }

    if (!noteData.category.trim()) {
      errors.category = "Category field is Mandatory";
      hasError = true;
    }

    setInputErrors(errors);
    return !hasError;
  };

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setNoteList([...noteList, { ...noteData }]);
    setNoteData({ title: "", content: "", category: "" });
  };

  const handleSaveBtn = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const updatedList = noteList.map((item, index) =>
      index === editIndex ? noteData : item
    );

    setNoteList(updatedList);
    setNoteData({ title: "", content: "", category: "" });
    setEditIndex(null);
    setIsEdited(false);
  };

  return (
    <div>
      <form className={styles.form}>
        <label className={styles.label}>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={noteData.title}
            onChange={handleTextChange}
            className={styles.input}
          />
        </label>
        {inputErrors.title && (
          <h6 className={styles.error}>{inputErrors.title}</h6>
        )}

        <label className={styles.label}>
          Content:
          <textarea
            name="content"
            placeholder="What's new..."
            value={noteData.content}
            onChange={handleTextChange}
            className={styles.textarea}
          />
        </label>
        {inputErrors.content && (
          <h6 className={styles.error}>{inputErrors.content}</h6>
        )}

        <label className={styles.label}>
          Category:
          <select
            name="category"
            value={noteData.category}
            onChange={handleTextChange}
            className={styles.select}
          >
            <option value="">Choose</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Learning">Learning</option>
          </select>
        </label>
        {inputErrors.category && (
          <h6 className={styles.error}>{inputErrors.category}</h6>
        )}

        {isEdited ? (
          <button className={styles.button} onClick={handleSaveBtn}>
            Save
          </button>
        ) : (
          <button className={styles.button} onClick={handleAddBtn}>
            Add Note
          </button>
        )}
      </form>
    </div>
  );
};

export default NoteForm;
