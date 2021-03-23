import React from 'react';
import burgerlogo from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo=(props)=>(
   <div className={classes.Logo} style={{height:props.height}}>
       <img  src={burgerlogo} alt="Myburger" />
   </div>

);

export default Logo;