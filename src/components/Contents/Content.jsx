import React from 'react';
import Setting from "./Setting";
import Search from "./Search";
import People from "./PeopleOnly/People";
import classes from '../Styles.module.css'
import TaskBar from "../TaskBar";


const Content=()=>{
    return (
        <div className={classes.content}>

            <div className={classes.container}>
                <div className={classes.content__row}>
                    <Search/>
                        <TaskBar/>
                </div>
                <People/>

            </div>
        </div>
    );
};

export default Content;