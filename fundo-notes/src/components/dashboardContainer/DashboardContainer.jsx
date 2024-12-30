import "./DashboardContainer.css";
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../headerBar/HeaderBar';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function DashboardContainer() {
  const [dashDrawerOpen, setDashDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setDashDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="dashboard-main-cnt">
        <HeaderBar dashDrawerOpen={dashDrawerOpen} toggleDrawer={toggleDrawer} />

        <div className="left-sidebar">
          <span onMouseEnter={() => setDashDrawerOpen(true)} onMouseLeave={() => setDashDrawerOpen(false)}>
            <LightbulbOutlinedIcon />
          </span>

          <span onMouseEnter={() => setDashDrawerOpen(true)} onMouseLeave={() => setDashDrawerOpen(false)}>
            <NotificationsOutlinedIcon />
          </span>

          <span onMouseEnter={() => setDashDrawerOpen(true)} onMouseLeave={() => setDashDrawerOpen(false)}>
            <ModeEditOutlinedIcon />
          </span>

          <span onMouseEnter={() => setDashDrawerOpen(true)} onMouseLeave={() => setDashDrawerOpen(false)}>
            <ArchiveOutlinedIcon />
          </span>

          <span onMouseEnter={() => setDashDrawerOpen(true)} onMouseLeave={() => setDashDrawerOpen(false)}>
            <DeleteOutlineOutlinedIcon />
          </span>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
