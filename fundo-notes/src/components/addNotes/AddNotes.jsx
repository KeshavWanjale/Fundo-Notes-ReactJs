import { React, useState } from 'react';
import "./AddNotes.scss";
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
import { addNoteApi, updateNote } from '../../utils/Apis';
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";


export default function AddNotes({ noteDetails, handleNotesList, editMode = false, closeEditNote }) {

  const [isExpanded, setIsExpanded] = useState(editMode);
  const [title, setTitle] = useState(noteDetails ? noteDetails.title : "");
  const [description, setDescription] = useState(noteDetails ? noteDetails.description : "");
  const [color, setColor] = useState(noteDetails ? noteDetails.color : "#ffffff");
  const [colorAnchorEl, setColorAnchorEl] = useState(null);
  const openColorPalette = Boolean(colorAnchorEl);

  const handleColorMenuClick = (event) => {
    setColorAnchorEl(event.currentTarget);
  };

  const handleColorClose = () => {
    setColorAnchorEl(null);
  };

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    handleAddNote();


    setColor("");
    setTitle("");
    setDescription("");
  }

  const handleAddNote = async () => {

    if (title && description) {
      const payload = { title, description, color };

      let noteObj = {}
      if (editMode) {
        noteObj = {
          ...noteDetails,
          title,
          description
        }
        await updateNote(noteDetails.id, noteObj);
      } else {
        const response = await addNoteApi(payload);
        console.log(response)
        noteObj = response.data;
      }

      if (editMode) {
        closeEditNote(false)
      }

      handleNotesList(
        noteObj,
        editMode ? "edit" : "add"
      );

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
              <PaletteIcon className="icon" onClick={handleColorMenuClick} />
              <ImageIcon className="icon" />
              <ArchiveIcon className="icon" />
              <MoreVertIcon className="icon" />
              <UndoIcon className="icon" />
              <RedoIcon className="icon" />
            </div>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>


          <Menu
            anchorEl={colorAnchorEl}
            open={openColorPalette}
            onClose={handleColorClose}
          >
            <div className="color-palate-cnt">
              <div className="col1" onClick={() => setColor("#FFFFFF")}></div>
              <div className="col2" onClick={() => setColor("#FAAFA8")}></div>
              <div className="col3" onClick={() => setColor("#F39F76")}></div>
              <div className="col4" onClick={() => setColor("#FFF8B8")}></div>
              <div className="col5" onClick={() => setColor("#E2F6D3")}></div>
              <div className="col6" onClick={() => setColor("#B4DDD3")}></div>
              <div className="col7" onClick={() => setColor("#D4E4ED")}></div>
              <div className="col8" onClick={() => setColor("#AECCDC")}></div>
              <div className="col9" onClick={() => setColor("#D3BFDB")}></div>
              <div className="col10" onClick={() => setColor("#F6E2DD")}></div>
              <div className="col11" onClick={() => setColor("#E9E3D4")}></div>
              <div className="col12" onClick={() => setColor("#EFEFF1")}></div>
            </div>
          </Menu>


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
