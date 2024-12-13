import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../headerBar/HeaderBar';
import "./DashboardContainer.css";


export default function DashboardContainer() {
  return (
    <div className="dashboard-main-cnt">
      <HeaderBar />

      <div style={{ width: "100%", display: "flex", marginTop: "80px" }}>
        <div>
          <span>icons</span>
        </div>
        <Outlet />
      </div>


    </div>
  )
}
