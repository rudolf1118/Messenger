import React, {useState} from 'react';
import {FiMenu} from 'react-icons/fi'
import classes from '../Styles.module.css'
import {MdMenuOpen,MdMenu} from 'react-icons/md'
import TaskBar from "../TaskBar";
const Setting=({closer})=>{
    const [icon,setIcon]=useState(false)
    const Iconer =()=>{
        if(icon) return <MdMenuOpen className={classes.setting__icon1}/>
        else return <MdMenu className={classes.setting__icon1}/>
        console.log(icon)
    }
    const opener = ()=>{
        setIcon(!icon);
        closer();
    }
    return (
        <div className={classes.setting}>
            <div onClick={opener}>  <Iconer className={classes.setting__icon1}></Iconer> </div>
        </div>
    );
};

export default Setting;