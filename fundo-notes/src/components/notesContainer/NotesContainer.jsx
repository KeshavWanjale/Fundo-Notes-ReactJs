import './NotesContainer.css'
import React, { useState, useEffect, useContext } from 'react';
import NoteCards from '../noteCards/NoteCards';
import AddNotes from '../addNotes/AddNotes';
import { getAllNotesApiCall } from '../../utils/Apis';
import { SearchQueryContext } from '../searchQueryHoc/SearchQueryHoc';

export default function NotesContainer() {
  const [notesList, setNotesList] = useState([]);
  const searchQuery = useContext(SearchQueryContext)

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(searchQuery)
  }, [searchQuery])

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
      setNotesList((prev) => [data, ...prev]);
    } else if (action === "archive" || action === "trash") {
      setNotesList((prev) => prev.filter((note) => note.id !== data.id));
    } else if (action === "edit" || action === "color") {
      setNotesList((prev) => prev.map((note) => {
        if (note.id === data.id) {
          return data
        }
        return note
      }));
    }
    else {
      console.error("Unknown action:", action);
    }

  };

  // Filter notes based on search query
  const filteredNotes = notesList.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AddNotes handleNotesList={handleNotesList} />
      <div className="space-container">
        <div className="note-container">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((noteObj) => <NoteCards key={noteObj.id} noteDetails={noteObj}
              handleNotesList={handleNotesList}
              container={"notes"}
            />)
          ) : (
            <p>No notes available.</p>
          )}

        </div>
      </div>
    </>
  );
}
