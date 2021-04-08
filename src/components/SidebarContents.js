import React from 'react'
import './SidebarContents.css'

function SidebarContents({name,icon}) {
    return (
        <div className='SidebarContents-container'>
            <p className='Sidebar-headings'>{icon}{name}</p>
        </div>
    )
}

export default SidebarContents
