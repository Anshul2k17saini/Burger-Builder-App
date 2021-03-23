import React from 'react';
import classes from './Drawertogger.module.css';

const Drawertogger=(props)=>(

   <div className={classes.DrawerToggle} onClick={props.clicked}>
       <div></div>
       <div></div>
       <div></div>
   </div>
); 


export default Drawertogger;