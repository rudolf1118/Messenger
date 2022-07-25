import React from 'react';
import classes from '../../Styles.module.css'
import Person from "./Person";
import {data} from "../../Data";
import Chat from "../../AloneChat/Chat";

const People=()=>{
    return (
        <div className={classes.people}>
            <div className={classes.container}>
                <div className={classes.people__column}>
                    {data.map((element)=>{
                      return(<div>
                          <Person data={element}/>
                          <Chat data={data}/>
                          </div>
                      )
                    })}
                </div>
            </div>
        </div>
    );
};

export default People;