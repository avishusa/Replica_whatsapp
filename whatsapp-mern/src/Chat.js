import React from 'react';
import '../src/Chat.css'
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import { InsertEmoticon } from '@mui/icons-material';
import { MicOutlined } from '@mui/icons-material';
function Chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
        < Avatar/>
        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      

      <div className='chat_body'>
        <p className='chat_message'>
          <span className='chat_name'>Avish</span>
          
          This is a meassage
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat_message'>
          <span className='chat_name'>Avish</span>
          
          This is a meassage
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat_message chat_reciever'>
          <span className='chat_name'>Avish</span>
          
          This is a meassage
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat_message'>
          <span className='chat_name'>Avish</span>
          
          This is a meassage
          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      <div>

      </div>
    <div className='chat_footer'>

      <InsertEmoticon />
      <form>
        <input placeholder='Type a message' type="text"/>
        <button  type='submit'>
          send a message
        </button>
      </form>
      < MicOutlined />
    </div>
      
    </div>
  )
}

export default Chat
