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

export default function AddNotes() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleInputClick = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
    }

    return (
        <>
            {isExpanded ? (
                <div className="expanded-note">
                    <input
                        type="text"
                        placeholder="Title"
                        className="note-title"
                    />
                    <textarea
                        placeholder="Take a note..."
                        className="note-input"
                    />
                    <div className="note-footer">
                        <div className="icons">
                            <NotificationsNoneIcon className="icon" />
                            <PersonAddIcon className="icon" />
                            <PaletteIcon className="icon" />
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
