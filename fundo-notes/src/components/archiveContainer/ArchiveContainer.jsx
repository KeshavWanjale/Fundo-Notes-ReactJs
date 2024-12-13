import React, { useContext, useEffect, useState } from "react";
import { getArchivedNotes } from "../../utils/Apis";
import "./ArchiveContainer.css";
import NoteCards from "../noteCards/NoteCards";
import { SearchQueryContext } from "../searchQueryHoc/SearchQueryHoc";

export default function ArchiveContainer() {
  const [archiveList, setArchiveList] = useState([]);
  const searchQuery = useContext(SearchQueryContext)

  useEffect(() => {
    fetchArchiveNotes();
  }, []);

  useEffect(() => {
  }, [searchQuery]);

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

  const handleArchiveList = (data, action) => {
    if (action === "unArchive") {
      let updatedList = archiveList.filter((ele, index) => ele.id !== data.id);
      setArchiveList(updatedList);
    }
    if (action === "archive") {
      let updatedList = archiveList.filter((ele, index) => ele.id !== data.id);
      setArchiveList(updatedList);
    }
    if (action === "trash") {
      let updatedList = archiveList.filter((ele, index) => ele.id !== data.id);
      setArchiveList(updatedList);
    }
  };

  const filteredNotes = archiveList.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="archive-container">
        {filteredNotes.length === 0 ? (
          <div className="empty-trash-container">
            <p>No notes available.</p>
          </div>
        ) : (
          filteredNotes.map((archiveObj) => (
            <NoteCards
              key={archiveObj.id}
              noteDetails={archiveObj}
              handleNotesList={handleArchiveList}
              container={"archive"}
            />
          ))
        )}
      </div>
    </div>
  );
}
