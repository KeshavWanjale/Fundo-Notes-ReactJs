import './HeaderBar.css';
import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Logo from '../../assets/keep.png';
import { UpdateQueryContext } from '../searchQueryHoc/SearchQueryHoc';
import Drawer from '@mui/material/Drawer';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';

export default function HeaderBar({ dashDrawerOpen, toggleDrawer }) {
    const updateSearchQuery = useContext(UpdateQueryContext);
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className="header">
                    <div className="drawer-btn">
                        <MenuIcon onClick={toggleDrawer} />
                    </div>
                    <div className="logo">
                        <img
                            src={Logo}
                            style={{ width: "40px", marginRight: "8px" }}
                            alt="logo"
                        />
                    </div>
                    <div className="header-text">
                        <h6>Keep</h6>
                    </div>
                    <div className="search-container">
                        <SearchIcon className="search-icon" style={{ color: "black" }} />
                        <input
                            type="text"
                            onChange={(e) => updateSearchQuery(e.currentTarget.value)}
                            placeholder="Search..."
                            className="search-input"
                        />
                    </div>
                    <div className="Appbar-icons">
                        <RefreshIcon
                            onClick={() => window.location.reload()}
                            style={{ cursor: "pointer" }}
                        />
                        <GridViewIcon />
                        <SettingsOutlinedIcon />
                    </div>
                    <div className="Account-icons">
                        <AppsIcon />
                    </div>
                </div>
            </header>

            <Drawer
                open={dashDrawerOpen}
                onClose={toggleDrawer}
                style={{ zIndex: "400" }}
            >
                <div style={{ marginTop: "80px" }}>
                    <div className="drawer-icon-item" onClick={() => navigate('notes')}>
                        <div className="drawer-icon">
                            <LightbulbOutlinedIcon />
                        </div>
                        <div className="drawer-icon-text">Notes</div>
                    </div>
                    <div className="drawer-icon-item">
                        <div className="drawer-icon">
                            <NotificationsOutlinedIcon />
                        </div>
                        <div className="drawer-icon-text">Notifications</div>
                    </div>

                    <div className="drawer-icon-item">
                        <div className="drawer-icon">
                            <ModeEditOutlinedIcon />
                        </div>
                        <div className="drawer-icon-text">Edit</div>
                    </div>

                    <div className="drawer-icon-item" onClick={() => navigate('archive')}>
                        <div className="drawer-icon">
                            <ArchiveOutlinedIcon />
                        </div>
                        <div className="drawer-icon-text">Archive</div>
                    </div>

                    <div className="drawer-icon-item" onClick={() => navigate('trash')}>
                        <div className="drawer-icon">
                            <DeleteOutlineOutlinedIcon />
                        </div>
                        <div className="drawer-icon-text">Trash</div>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
