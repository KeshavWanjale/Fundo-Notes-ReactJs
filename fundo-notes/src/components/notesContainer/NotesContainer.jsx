import React, { useState, useEffect } from 'react';
import DashboardContainer from '../dashboardContainer/DashboardContainer';
import NoteCards from '../noteCards/NoteCards';
import AddNotes from '../addNotes/AddNotes';
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


  return (
    <>
      <DashboardContainer />
      <div>
        <AddNotes handleNotesList={handleNotesList} />
      </div>
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
