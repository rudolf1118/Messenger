import React from 'react';
import {FiMenu} from 'react-icons/fi'
import classes from '../Styles.module.css'

const Setting=()=>{
    return (
        <div className={classes.setting}>
            <FiMenu className={classes.setting__icon1}/>
        </div>
    );
};

export default Setting;