import React from "react";
import "./NoteCards.css";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { IconButton, Menu, MenuItem}from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PaletteIcon from "@mui/icons-material/Palette";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function NoteCards() {
  return (
    <>

      <div className="card-wrapper-cnt">
        <div className="card-main-cnt" >
          <div className="note-card-content">
            <h3>{"Tittle"}</h3>
            <p>{"Description"}</p>
          </div>


          <div className="card-button-cnt">
            <IconButton aria-label="set reminder">
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton aria-label="add collaborator">
              <PersonAddIcon />
            </IconButton>

            <div className="color-menu">
              <IconButton aria-label="change color">
                <PaletteIcon className="select-color" />
              </IconButton>
    
            </div>

            <IconButton aria-label="add image">
              <ImageIcon />
            </IconButton>


            <IconButton aria-label="archive note">
              <UnarchiveIcon />
            </IconButton>


            <IconButton aria-label="more options">
              <MoreVertIcon />
            </IconButton>

            <Menu>
              <MenuItem>Delete note</MenuItem>
              <MenuItem>Add label</MenuItem>
              <MenuItem>Make a copy</MenuItem>
            </Menu>
          </div>


        </div>
      </div>

    </>
  )
}
