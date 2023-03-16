import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material';
import "./css/sidebar.css";
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ addnewchat, id, name }) {
    const [seed, setSeed] = useState("");
    const [lastMessage, setLastMessage] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        db.collection("rooms").doc(id).collection("message").orderBy("timestamp","desc").onSnapshot(
            snapshot=>setLastMessage(snapshot.docs.map(doc=>doc.data())))
    }, [])

    const createChat = () => {
        const room = prompt("please enter room name");
        if (room) {
            db.collection("rooms").add({
                name: room
            })
        }
    }
    return (
        !addnewchat ? (
            <Link style={{textDecoration: 'none' , color: "black" }}  to={`/room/${id}`}>
                <div className="sidebar__chat">
                    <Avatar src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${seed}`} />
                    <div className="sidebar__chatInfo">
                        <h2>{name}</h2>
                        <p>{lastMessage[0]?.message}</p>
                    </div>
                </div>
            </Link>
        ) : (
            <div className="sidebar__chat" onClick={createChat}>
                <h2>Add new chat</h2>
            </div>
        )

    )

}

export default SidebarChat