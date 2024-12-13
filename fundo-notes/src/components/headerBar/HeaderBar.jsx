import React, { useContext } from 'react'
import './HeaderBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import Logo from '../../assets/keep.png';
import { UpdateQueryContext } from '../searchQueryHoc/SearchQueryHoc';


export default function HeaderBar() {
    const updateSearchQuery = useContext(UpdateQueryContext)

    return (
        <header>

            <div className="header">

                <div className="drawer-btn">
                    <MenuIcon />
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
                    <input type="text" onChange={(e) => updateSearchQuery(e.currentTarget.value)}
                        placeholder="Search..." className="search-input" />
                </div>
                <div className="Appbar-icons">
                    <RefreshIcon onClick={() => window.location.reload()} style={{ cursor: "pointer" }} />
                    <GridViewIcon />
                    <SettingsOutlinedIcon />
                </div>
                <div className="Account-icons">
                    <AppsIcon />
                </div>
            </div>
        </header>
    )
}
