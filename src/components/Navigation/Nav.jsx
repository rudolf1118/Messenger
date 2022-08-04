import React from 'react';
import classes from "../Styles.module.css";
import {NavLink} from "react-router-dom";

const Nav=({name})=>{
    return (
        <NavLink to={`/person/`+name} className={classes.container}>

        </NavLink>
    );
};

export default Nav;