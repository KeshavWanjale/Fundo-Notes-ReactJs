import { React, useState } from 'react';
import "./AddNotes.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BrushIcon from "@mui/icons-material/Brush";
import ImageIcon from "@mui/icons-material/Image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaletteIcon from "@mui/icons-material/Palette";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { addNoteApi } from '../../utils/Apis';

export default function AddNotes({ mode = "add", noteDetails = {}, handleNotesList }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState(mode === "add" ? "" : noteDetails.title || "");
    const [description, setDescription] = useState(mode === "add" ? "" : noteDetails.description || "");
    const [color, setColor] = useState(noteDetails.color || "");
    const [openColor, setOpenColorMenu] = useState(false);

    const handleInputClick = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
        if (mode === "add") {
            handleAddNote();
        }

        
        setColor("");
        setTitle("");
        setDescription("");
    }

    const handleAddNote = async () => {
        if (title && description) {
            const payload = { title, description, color };

            const response = await addNoteApi(payload);
            if (response) {
                handleNotesList(
                    {
                        id: response.data.id,
                        title: title,
                        description: description,
                        color: color
                    },
                    "add"
                );

                console.log("Note added successfully:", response);
            } else {
                console.log("Title and description are required.");
            }
        }
    };

    return (
        <>
            {isExpanded ? (
        <div
          className="expanded-note"
          style={{ backgroundColor: color || noteDetails?.color || "#ffffff" }}
        >
          <input
            type="text"
            placeholder="Title"
            className="note-title"
            value={title}
            style={{ backgroundColor: color || noteDetails?.color || "#ffffff" }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Take a note..."
            style={{ backgroundColor: color || noteDetails?.color || "#ffffff" }}
            className="note-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="note-footer">
            <div className="icons">
              <NotificationsNoneIcon className="icon" />
              <PersonAddIcon className="icon" />
              <PaletteIcon className="icon"  />
              <ImageIcon className="icon" />
              <ArchiveIcon className="icon"  />
              <MoreVertIcon className="icon" />
              <UndoIcon className="icon" />
              <RedoIcon className="icon" />
            </div>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>

          {openColor && (
            <div className="color-menu">
              <div className="color-row">
                {["#FFEB3B", "#FF7043", "#66BB6A", "#29B6F6", "#AB47BC", "#FF4081"].map(
                  (color) => (
                    <div
                      key={color}
                      className="color-option"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
                <div className="collapsed-note" onClick={handleInputClick}>
                    <input
                        type="text"
                        placeholder="Take a note..."
                        className="collapsed-input"
                        value=""
                        readOnly
                    />
                    <div className="collapsed-icons">
                        <CheckBoxIcon className="icon" />
                        <BrushIcon className="icon" />
                        <ImageIcon className="icon" />
                    </div>
                </div>
            )
           }
        </>
    )
}
