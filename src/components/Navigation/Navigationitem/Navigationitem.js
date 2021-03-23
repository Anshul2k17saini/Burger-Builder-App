import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navigationitem.module.css';
const Navigationitem =(props)=>(
    
    <li className={classes.Navigationitem}>
        <NavLink
        to={props.link}
        className={props.active ? classes.active:null}>{props.children}</NavLink>
    </li>

);

export default Navigationitem;