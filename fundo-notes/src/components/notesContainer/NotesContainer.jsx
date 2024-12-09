import React, { useState, useEffect } from 'react';
import NoteCards from '../noteCards/NoteCards';
import AddNotes from '../addNotes/AddNotes';
import './NotesContainer.css'
import { getAllNotesApiCall } from '../../utils/Apis';

export default function NotesContainer() {
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAllNotesApiCall();
      console.log(res);
      setNotesList(res.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setNotesList([]);
    }
  };

  const handleNotesList = (data, action) => {
    if (action === "add") {
      setNotesList((prev) => [...prev, data]);
    } else if (action === "archive" || action === "trash") {
      setNotesList((prev) => prev.filter((note) => note.id !== data.id));
    } else if (action === "edit" || action === "color") {
      const updatedList = notesList.map((note) => {
        if (note.id === data.id) {
          return data;
        }
        return note;
      });
      console.log(updatedList);
      setNotesList(updatedList);
    } else {
      console.error("Unknown action:", action);
    }
  };

  return (
    <>
      <AddNotes handleNotesList={handleNotesList} />
      <div className="space-container">
        <div className="note-container">
          {notesList.length > 0 ? (
            notesList.map((noteObj) => <NoteCards key={noteObj.id} noteDetails={noteObj} />)
          ) : (
            <p>No notes available.</p>
          )}

        </div>
      </div>
    </>
  );
}
