import { React, useState } from "react";
import "./NoteCards.scss";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import ArchiveIcon from "@mui/icons-material/Archive";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaletteIcon from "@mui/icons-material/Palette";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { archiveNote, trashNote, deleteNote, changeNoteColorApi } from "../../utils/Apis";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import Modal from "@mui/material/Modal";
import AddNotes from "../addNotes/AddNotes";

export default function NoteCards({ noteDetails, handleNotesList, container }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditNote, setOpenEditNote] = useState(false);
  const [colorAnchorEl, setColorAnchorEl] = useState(null);
  const openColorPalette = Boolean(colorAnchorEl);

  const handleColorMenuClick = (event) => {
    setColorAnchorEl(event.currentTarget);
  };

  const handleColorClose = () => {
    setColorAnchorEl(null);
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNoteIconClick = (action) => {
    if (action === "archive" || action === "unArchive") {
      archiveNote(noteDetails.id);
    }
    else if (action === "delete_forever") {
      deleteNote(noteDetails.id);
    }
    else if (action === "trash" || action === "recover") {
      trashNote(noteDetails.id);
    } else {
      changeNoteColorApi(noteDetails.id, action)
      noteDetails.color = action
      action = "color"
    }
    handleNotesList(noteDetails, action);
  };

  return (
    <div className="card-wrapper-cnt">
      <div className="card-main-cnt" style={{ backgroundColor: noteDetails.color || "#ffffff" }}>
        <div
          className="note-card-content"
          onClick={() => setOpenEditNote(true)}
        >
          <h6>{noteDetails.title}</h6>
          <p>{noteDetails.description}</p>
        </div>

        {(container === "notes" || container === "archive") && (
          <div className="card-button-cnt">
            <IconButton aria-label="set reminder">
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton aria-label="add collaborator">
              <PersonAddIcon className="color-menu" />
            </IconButton>
            <IconButton
              aria-label="change color"
              onClick={handleColorMenuClick}
            >
              <PaletteIcon />
            </IconButton>

            <Menu
              anchorEl={colorAnchorEl}
              open={openColorPalette}
              onClose={handleColorClose}
            >
              <div className="color-palate-cnt">
                <div
                  className="col1"
                  onClick={() => handleNoteIconClick("#FFFFFF")}
                ></div>
                <div
                  className="col2"
                  onClick={() => handleNoteIconClick("#FAAFA8")}
                ></div>
                <div
                  className="col3"
                  onClick={() => handleNoteIconClick("#F39F76")}
                ></div>
                <div
                  className="col4"
                  onClick={() => handleNoteIconClick("#FFF8B8")}
                ></div>
                <div
                  className="col5"
                  onClick={() => handleNoteIconClick("#E2F6D3")}
                ></div>
                <div
                  className="col6"
                  onClick={() => handleNoteIconClick("#B4DDD3")}
                ></div>
                <div
                  className="col7"
                  onClick={() => handleNoteIconClick("#D4E4ED")}
                ></div>
                <div
                  className="col8"
                  onClick={() => handleNoteIconClick("#AECCDC")}
                ></div>
                <div
                  className="col9"
                  onClick={() => handleNoteIconClick("#D3BFDB")}
                ></div>
                <div
                  className="col10"
                  onClick={() => handleNoteIconClick("#F6E2DD")}
                ></div>
                <div
                  className="col11"
                  onClick={() => handleNoteIconClick("#E9E3D4")}
                ></div>
                <div
                  className="col12"
                  onClick={() => handleNoteIconClick("#EFEFF1")}
                ></div>
              </div>
            </Menu>



            <IconButton aria-label="add image">
              <ImageIcon />
            </IconButton>

            {container === "archive" ? (
              <IconButton
                aria-label="unarchive note"
                onClick={() => handleNoteIconClick("unArchive")}
              >
                <UnarchiveIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="archive note"
                onClick={() => handleNoteIconClick("archive")}
              >
                <ArchiveIcon />
              </IconButton>
            )}

            <IconButton aria-label="more options" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => handleNoteIconClick("trash")}>
                Delete note
              </MenuItem>
              <MenuItem onClick={handleClose}>Add label</MenuItem>
              <MenuItem onClick={handleClose}>Make a copy</MenuItem>
            </Menu>

            <Modal
              open={openEditNote}
              onClose={() => setOpenEditNote(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <AddNotes
                noteDetails={noteDetails}
                editMode={true}
                handleNotesList={handleNotesList}
                closeEditNote={setOpenEditNote}
              />
            </Modal>
          </div>
        )}

        {container === "trash" && (
          <div className="delete-container-btn">
            <div className="card-button-cnt">
              <div className="delete">
                <IconButton
                  aria-label="delete forever"
                  onClick={() => handleNoteIconClick("delete_forever")}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </div>
              <div className="other-delete">
                <IconButton
                  aria-label="restore from trash"
                  onClick={() => handleNoteIconClick("recover")}
                >
                  <RestoreFromTrashIcon />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
