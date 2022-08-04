import React from 'react';
import classes from '../../Styles.module.css'
import Person from "./Person";
import {data} from "../../Data";
import Chat from "../../AloneChat/Chat";
import {NavLink} from "react-router-dom";

const People=()=>{
    return (
        <div className={classes.people}>
            <div className={classes.container}>
                <div className={classes.people__column}>
                    {data.map((element)=>{
                      return(<div>
                                  <Person data={element}/>
                          </div>
                      )
                    })}
                </div>
            </div>
        </div>
    );
};

export default People;