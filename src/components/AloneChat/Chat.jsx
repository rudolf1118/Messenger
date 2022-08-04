import React from 'react';
import classes from "../Styles.module.css";
import Profile from "./Profile";
import People from "../Contents/PeopleOnly/People";
import Content from "../Contents/Content";


const Chat=({data})=>{
    return (
        <div className={classes.chat}>
            <div className={classes.container}>
                <div className={classes.chat__column}>
                <Profile data={data}/>
                <Content/>
                  <div className={classes.text}>HELLO</div>
                </div>
            </div>
        </div>
    );
};

export default Chat;