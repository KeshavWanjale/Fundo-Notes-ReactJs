import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../headerBar/HeaderBar';
import "./DashboardContainer.css";


export default function DashboardContainer() {
  return (
    <div className="dashboard-main-cnt">
      <HeaderBar/>
      <Outlet/>
    </div>
  )
}
