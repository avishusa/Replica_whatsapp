import React from 'react';
import "./Sidebar.css";
import { DonutLargeRounded, SearchOffOutlined } from '@mui/icons-material';
import { Avatar,IconButton } from '@mui/material';
import { ChatSharp } from '@mui/icons-material';
import { MoreVertOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat'
function Sidebar() {
  return (
    <div className="sidebar"> 
      <div className='sidebar_header'>
      <Avatar src='' />
        <div className='sidebar_headerRight'>
          
          <IconButton><DonutLargeRounded/></IconButton>
          <IconButton><ChatSharp/></IconButton>
          <IconButton><MoreVertOutlined/></IconButton>
          
        </div>
      </div>
      <div claaName='sidebar_search'>
          <div className='sidebar_searchContainer'>
          <SearchOffOutlined/>
          <input placeholder='Search here' type='text'></input>
          </div>
        </div>
        <div className='sidebar_chats'>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>

        </div>
    </div>
  )
}

export default Sidebar;
