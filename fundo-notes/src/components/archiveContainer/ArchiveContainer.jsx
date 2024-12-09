import React, { useEffect, useState } from "react";
import { getArchivedNotes } from "../../utils/Apis";
import "./ArchiveContainer.css";
import NoteCards from "../noteCards/NoteCards";

export default function ArchiveContainer() {
  const [archiveList, setArchiveList] = useState([]); 

  useEffect(() => {
    fetchArchiveNotes();
  }, []);

  const fetchArchiveNotes = async () => {
    try {
      const res = await getArchivedNotes();
      console.log(res);
      setArchiveList(res.data.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setArchiveList([]);
    }
  };

  return (
    <div className="main-container">
      <div className="note-container">
        {archiveList.length === 0 ? (
          <div className="empty-trash-container">
            <p>No notes available.</p>
          </div>
        ) : (
          archiveList.map((archiveObj) => (
            <NoteCards
              key={archiveObj.id}
              noteDetails={archiveObj}
              container={"archive"}
            />
          ))
        )}
      </div>
    </div>
  );
}
