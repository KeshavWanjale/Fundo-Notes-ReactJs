import React from "react"; 
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./components/login/Login"
import Register from "./components/register/Register" 
import DashboardContainer from "./components/dashboardContainer/DashboardContainer";  
import NotesContainer from "./components/notesContainer/NotesContainer";
import ArchiveContainer from "./components/archiveContainer/ArchiveContainer";
import TrashContainer from "./components/trashContainer/TrashContainer";
import NoteCards from "./components/noteCards/NoteCards";
import AddNotes from "./components/addNotes/AddNotes";


export default function RoutingModule(){
    const routes = createBrowserRouter([
        {
            'path': '',
            'element': <AddNotes/>
            // 'element': <NoteCards/>
        },

        {
            'path': 'register',
            'element': <Register/>
        },

        {
            'path': 'login',
            'element': <Login/>
        },

        {
            'path': 'dashboard',
            'element': <DashboardContainer/>,
            'children': [
                {
                    path: "notes", 
                    element: <NotesContainer />,
                },
                {
                    path: "archive", 
                    element: <ArchiveContainer />,
                },
                {
                    path: "trash", 
                    element: <TrashContainer />,
                }
            ]
    
        }

        
    ]) 

    return (
        <RouterProvider router={routes}/>
    )
};

