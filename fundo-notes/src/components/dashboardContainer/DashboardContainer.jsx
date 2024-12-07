import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderBar from '../headerBar/HeaderBar';


export default function DashboardContainer() {
  return (
    <div>
      <HeaderBar/>
      <Outlet/>
    </div>
  )
}
