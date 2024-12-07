import {React, useState, useEffect} from 'react'
import DashboardContainer from '../dashboardContainer/DashboardContainer'
import NoteCards from '../noteCards/NoteCards'
import AddNotes from '../addNotes/AddNotes'
import { getAllNotesApiCall } from '../../utils/Apis'

export default function NotesContainer() {

  return (
    <>
      <DashboardContainer />
      <div>
        <AddNotes />
      </div>
      <div className="space-container">
      <div className="note-container">
            <NoteCards />
        </div>
      </div>
    </>
  )
}
