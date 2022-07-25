import React from 'react';
import classes from "../Styles.module.css";
import Profile from "./Profile";


const Chat=({data})=>{
    return (
        <div className={classes.chat}>
            <div className={classes.container}>
                <div className={classes.chat__column}>
                <Profile data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Chat;