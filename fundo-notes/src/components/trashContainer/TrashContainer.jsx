import React, { useContext, useEffect, useState } from "react";
import { getTrashedNotes } from "../../utils/Apis";
import "./TrashContainer.css";
import NoteCards from "../noteCards/NoteCards";
import { SearchQueryContext } from "../searchQueryHoc/SearchQueryHoc";


export default function TrashContainer() {
  const [trashList, setTrashList] = useState([]);
  const searchQuery = useContext(SearchQueryContext)

  useEffect(() => {
    fetchArchiveNotes();
  }, []);

  useEffect(() => {

  }, [searchQuery])


  const fetchArchiveNotes = async () => {
    try {
      const res = await getTrashedNotes();
      console.log(res);
      setTrashList(res.data.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setTrashList([]);
    }
  };

  const handleTrashList = (data, action) => {
    if (action === "delete_forever") {
      let updatedList = trashList.filter((ele) => ele.id !== data.id);
      setTrashList(updatedList);
    }
    if (action === "recover") {
      let updatedList = trashList.filter((ele) => ele.id !== data.id);
      setTrashList(updatedList);
    }
  };

  const filteredNotes = trashList.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="trash-container">
        {filteredNotes.length === 0 ? (
          <div className="empty-trash-container">
            <p>No notes available.</p>
          </div>
        ) : (
          filteredNotes.map((trashObj) => (
            <NoteCards
              key={trashObj.id}
              noteDetails={trashObj}
              handleNotesList={handleTrashList}
              container={"trash"}
            />
          ))
        )}
      </div>
    </div>
  )
}
