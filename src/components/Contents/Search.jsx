import React from 'react';
import classes from '../Styles.module.css'
import {FiSearch} from 'react-icons/fi'
const Search=()=>{
    return (
        <div className={classes.search}>
            <FiSearch/> Search...
        </div>
    );
};

export default Search;