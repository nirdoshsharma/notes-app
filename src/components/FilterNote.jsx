import React from "react";
import styles from "../NoteApp.module.css";

const FilterNote = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="category-filter" className={styles.filterLabel}>
        Filter by Category:
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className={styles.filterSelect}
      >
        <option value="">All</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Learning">Learning</option>
      </select>
    </div>
  );
};

export default FilterNote;
