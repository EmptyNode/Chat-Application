import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./css/sidebar.css";
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function Sidebar() {
    const[rooms, setRooms] = useState([]);
    const[{user}, dispatch] = useStateValue();
    useEffect(()=>{
        db.collection("rooms").onSnapshot(snapshot=>{
            setRooms(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()

            })))
        })
    },[])
    // console.log(rooms);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar className='pagol' src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
                <div className="sidebar__headerRight">
                    <IconButton >
                        <DonutLargeIcon className='sidebarHeaderIcons'/>
                    </IconButton >

                    <IconButton >
                        <ChatIcon className='sidebarHeaderIcons' />
                    </IconButton>

                    <IconButton >
                        <MoreVertIcon className='sidebarHeaderIcons' />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="side__searchContainer">
                    {/* <SearchIcon /> */}
                    <input type="text" placeholder="Search or start a new chat" className='custom-color'/>
                </div>
            </div>

            <div className="sidebar__chats">
            <SidebarChat addnewchat/>

            {
                rooms.map(room=>{
                    return <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                })
            }
            </div>
        </div>
    )
}

export default Sidebar