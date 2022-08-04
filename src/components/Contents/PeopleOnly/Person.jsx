import React, {useState} from 'react';
import classes from "../../Styles.module.css";
import {MdVerified} from "react-icons/md"
import { NavLink } from "react-router-dom";
import Nav from "../../Navigation/Nav";

const Person=({data})=>{
    const {id, img, name, surname, message, messageNum,status}=data;
    const [color,setColor]=useState(false);
    const [nav,setNav]=useState(true);
    let dateObj=new Date();
    let hour=dateObj.getHours();
    let minute=dateObj.getMinutes()

    const areyou=(el)=>{
        if (el < 10) {
            el="0" + el;
            return el
        } else {
            return el
        }
    }

    const personner = (el)=>{
        setColor(!color);

    }


    // 38 letter
    const lettercut=(letter)=>{
        if (letter.length > 37) {
            letter=letter.substring(0, 30) + "..."
        }
        return letter;
    }

    return (
        <div className={color ? classes.personColor : classes.person } id={id} onClick={personner}>
            <NavLink to={nav ? `/person/${name}` : `/person`  } className={classes.container} onClick={()=>setNav(!nav)}>
                <div className={classes.person__row}>
                    <div className={classes.person__img}>
                        <img src={img}/>
                    </div>
                    <div className={classes.person__rerow}>
                        <div className={classes.person__leftColumn}>
                            <div className={classes.person__names}>
                                {img ? name : name + " " + surname} {img ? surname : <MdVerified/>}
                            </div>
                            <div className={classes.person__lastMessage}>{lettercut(message)}</div>
                        </div>
                        <div className={classes.person__rightColumn}>
                            <div className={classes.person__time}>
                                {areyou(hour)}:{areyou(minute + Math.floor(Math.random() * 11))}
                            </div>
                            <div className={messageNum ? classes.person__messageNum : classes.person__messageNumNone}>
                                <span> {messageNum}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>

    );
};

export default Person;