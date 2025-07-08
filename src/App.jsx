import { useEffect, useState } from "react";
import styles from "./NoteApp.module.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import FilterNote from "./components/FilterNote";

function App() {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [noteList, setNoteList] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [isEdited, setIsEdited] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  // ✅ Load from localStorage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNoteList(JSON.parse(savedNotes));
    }
  }, []);

  // ✅ Save to localStorage whenever noteList changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteList));
  }, [noteList]);

  const filteredNotes = selectedCategory
    ? noteList.filter((note) => note.category === selectedCategory)
    : noteList;

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Notes-Taking Application</h1>
      </div>

      <NoteForm
        noteData={noteData}
        setNoteData={setNoteData}
        noteList={noteList}
        setNoteList={setNoteList}
        isEdited={isEdited}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        setIsEdited={setIsEdited}
      />

      <FilterNote
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <NoteList
        noteList={filteredNotes}
        setNoteList={setNoteList}
        setEditIndex={setEditIndex}
        setNoteData={setNoteData}
        setIsEdited={setIsEdited}
      />
    </div>
  );
}

export default App;
